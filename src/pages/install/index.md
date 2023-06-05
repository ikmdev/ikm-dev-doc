# Installation

This page will provide step-by-step installation instructions for Komet.

```bash
installation commands will be in blocks
```

## Installing Komet

The following diagram contains a general overview of the installation process. The directions below contain additional
steps that need to be performed.

### Setup the Installer

1. **Create Secrets**

    You will need SSH keys to access your Jenkins and Gitlab servers. The private SSH keys required to access these
    servers should be base64 encoded and stored in AWS. Only one secret is needed if both GitLab and Jenkins instances
    use the same SSH key pair. You have the option to use your existing key pairs.

    **Encode and Store the Private SSH Key in AWS Secrets Manager**:

    You need to base64 encode your private SSH key by running

    ```bash
    base64 ~/.ssh/id_rsa > base64_id_rsa
    ```

    Once you have your private key pair encoded, create a secret in AWS Secrets manager and store your base64 encoded
    id_rsa there. The secret that you create should be of the type `Other Type of Secret` and `plaintext`.

2. **Configure the Installation Server**

   SSH into your installation server and run the following command(s) in order to install docker and start the container
   that will be able to install the necessary packages on the *Installation Server*.

    ```bash
    sudo dnf config-manager --add-repo=https://download.docker.com/linux/centos/docker-ce.repo; \
    sudo dnf install docker-ce-3:20.10.17 unzip-6.0 jq-1.6 vim-enhanced-2:8.0.1763 --nobest -y; \
    sudo systemctl start docker; \
    sudo docker run hello-world
    ```

3. **Download and Extract the Release**

   Download the latest Titan Repos archive from the
   [Titan Downloads page](https://github.com/Deloitte/docs.gps-garage.io/releases) to assist you
   in cloning the necessary repositories for a full Titan installation and pipeline test. The zip file contains the
   necessary Titan repositories and a script that will push them to the matching GitLab Groups.

   If you want to download the zip directly onto the installation server, use the following:

    ```bash
        # get latest zip id. Replace my-github-username:github-pat-token with your github username and pac token
        ASSET_ID=$(curl -u my-github-username:github-pat-token \
        -H "Accept: application/vnd.github.v3+json" \
        https://api.github.com/repos/Deloitte/docs.gps-garage.io/releases | \
        jq '.[0].assets[] | select(.name=="Titan-Repos.zip") | .id')

        # download latest zip. Replace my-github-username:github-pat-token with your github username and pac token
        curl -OJL \
        -u my-github-username:github-pat-token \
        -H "Accept: application/octet-stream" \
        https://api.github.com/repos/Deloitte/docs.gps-garage.io/releases/assets/$ASSET_ID
    ```

   You can also use *secure copy protocol (SCP)* to transfer the zip to the *Installation Server* by following these
   steps.

    * go to `https://github.com/Deloitte/docs.gps-garage.io/releases`
    * download the `Titan-Repos.zip` file to your local machine
    * upload to your installation server using the following command:

    ```bash
    scp -i ~/.ssh/my-ssh.key Titan-Repos.zip ec2-user@installation-server.my-domain.com:/home/ec2-user`
    ```

   Extract release zip to desired working directory with the following command:

    ```bash
    unzip Titan-Repos.zip -d Titan-Repos
    ```