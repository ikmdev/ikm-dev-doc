# SWF Titan Docs

## Setup

### Quick Guide

1. Set values in `values.yaml`
2. Ensure every `enabled: true` secret under the `secrets:` block contains both a valid path and key
3. Push changes to remote git repository
4. Apply `application.yaml` file to ArgoCD namespace

    `kubectl apply -f application.yaml -n argocd`

Secret explanations:

1. regCred - registry credential to authenticate to docker registry to pull private image

### Understanding RegCred and Password Secrets

* [Reference](https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/)
* [ArgoCD Config](https://argocd-vault-plugin.readthedocs.io/en/stable/config/)
* [ArgoCD Usage](https://argocd-vault-plugin.readthedocs.io/en/stable/usage/)

In order to install private images, `pods` need to use credentials to login to the remote registry.
Generally it looks like the following:

```yaml
spec:
  imagePullSecrets:
  - name: regcred
  containers:
  - name: nginx
    image: nginx:latest
```

The regcred `secret` generally looks like the following:

```yaml
kind: Secret
apiVersion: v1
metadata:
  name: regcred
type: kubernetes.io/dockerconfigjson
data:
  .dockerconfigjson: eyJhdXRocyI6eyJkb2NrZXIuZWtzLXRlc3QuZ3BzLWdhcmFnZS1wYWsuY29tIjp7InVzZXJuYW1lIjoiYWRtaW4iLCJwYXNzd29yZCI6ImFkbWluMTIzIiwiYXV0aCI6IllXUnRhVzQ2WVdSdGFXNHhNak09In19fQ==
```

Base64 decoded, the `.dockerconfigjson` value should yield something like the following:

```json
{"auths":{"docker.eks-test.gps-garage-pak.com":{"username":"admin","password":"admin123","auth":"YWRtaW46YWRtaW4xMjM="}}}
```

### ArgoCD's Role

ArgoCD can inject secret values into `secret` resources. To inject a `secret` with ArgoCD, ArgoCD's
AVP (ArgoCD Vault Plugin) needs to be enabled and configured for Vault or AWS Secrets Manager.
ArgoCD can inject values into `secrets` with the `avp.kubernetes.io/path:` annotation.
The following is an example of a secret that ArgoCD can modify using Hashicorp vault:

```yaml
kind: Secret
apiVersion: v1
metadata:
  name: regcred
  annotations:
    avp.kubernetes.io/path: "/some-secret/data/credentials"
type: kubernetes.io/dockerconfigjson
data:
  .dockerconfigjson: <some-key-in-credentials-secret>
```

ArgoCD will will query your Vault for a secret with the path of `/some-secret-in-vault/data/credentials`.
It will then inject the value that matches the key specified in the chevron arrows `<>` (`<some-key-in-credentials-secret>`).
The HashiCorp V2 API requires the `/data/` block after secret engine name.

Similarly, the following serves as a reference for using ArgoCD injection with AWS Secrets Manager:

```yaml
kind: Secret
apiVersion: v1
metadata:
  name: regcred
  annotations:
    avp.kubernetes.io/path: "some-aws-secret"
type: kubernetes.io/dockerconfigjson
data:
  .dockerconfigjson: <some-key-in-some-aws-secret>
```

### Putting It All Together

1. For any secret that you want to inject into your deployment, ensure the secret exists in Vault or AWS.
    The secret must be referenced appropriately in order to be injected.

    ```yaml
    adminPassword:
      # enabled to inject secret value and create k8s secret
      enabled: true
      # if manager == vault, path to secret: '/kv/data/my-secret'
      # if manager == aws, name of aws secret 'my-aws-secret'
      path: "/kv/data/credentials"
      # json key with value to inject
      key: <admin-password>
    ```

2. (Optional) If a valid regcred secret does not already exist in Vault or AWS, modify the below
    JSON block with your values and base64 encode it.
    **In order to properly encode the string, create a file `credentials.json` and base64 encode it:**
    **`cat credentials.json | base64`**. The string should not contain line breaks.

    ```json
    {"auths":{"my-docker-registry.my-domain.com":{"username":"admin","password":"admin123"}}}
    ```

    Create a secret with the base64 encoded value:

    ```json
    {
      "my-vault-secret": "eyJhdXRocyI6eyJteS1kb2NrZXItcmVnaXN0cnkubXktZG9tYWluLmNvbSI6eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJhZG1pbjEyMyJ9fX0="
    }
    ```

3. When deploying `applications` with ArgoCD that require private images from your container registry,
    enable the `secrets.regCred` secret and reference the appropriate secret.

    ```yaml
    regCred:
      enabled: false
      path: "/kv/data/credentials"
      key: <my-vault-secret>
    ```

4. Modify the `image:` key to use your registry

    ```yaml
    image: my-docker-registry.my-domain.com/repository/docker-internal/sonarqube:9.4.0-community
    ```

5. Push changes to remote Git repository
6. Apply `application.yaml` file to ArgoCD namespace
    `kubectl apply -f application.yaml -n argocd`
