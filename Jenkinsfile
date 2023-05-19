// pipeline {
//   agent any
//   parameters {
//     string(name: 'TAG', defaultValue: "latest", trim: true, description: 'Tag to apply to image. Example: latest')
//   }

//   environment {
//     NEXUS_CREDENTIALS   = credentials('nexus_user')
//     IMAGE_NAME          = 'swf-titan-docs'
//     WEBHOOK_URL         = "${GLOBAL_CHATOPS_URL}"
//     AWS_SECRET_ACCESS_KEY = credentials('AWS_SECRET_ACCESS_KEY')
//     AWS_SECRET_ACCESS_KEY_ID = credentials('AWS_SECRET_ACCESS_KEY_ID')
//   }

//   options {
//     // Set this to true if you want to clean workspace during the prep stage
//     skipDefaultCheckout(false)
//     // Console debug options
//     timestamps()
//     ansiColor('xterm')
//   }

//   stages {
//     stage('Prep Workspace') {
//       agent any

//       steps {
//         // Login to docker Repo
//         sh 'echo $NEXUS_CREDENTIALS_PSW | podman login -u $NEXUS_CREDENTIALS_USR --password-stdin ${GLOBAL_NEXUS_SERVER_URL}'

//         script {
//           env.GIT_COMMIT_MSG = sh(script: 'git log --format="medium" -1 ${GIT_COMMIT}', returnStdout: true).trim()
//           env.HASH_SHORT = sh(script: 'git rev-parse --short HEAD', returnStdout: true).trim()
//         }
//       }
//     }

//     stage('Build & Push Image') {
//       steps {
//         sh "docker build -t $IMAGE_NAME:$TAG ."
//         sh "docker image tag $IMAGE_NAME:$TAG ${GLOBAL_NEXUS_SERVER_URL}/${GLOBAL_NEXUS_REPO_NAME}/$IMAGE_NAME:$TAG"
//         sh "docker image push ${GLOBAL_NEXUS_SERVER_URL}/${GLOBAL_NEXUS_REPO_NAME}/$IMAGE_NAME:$TAG"
//       }
//     }
//   }

//   post {
//     // Notify chat ops channel
//     success {
//       office365ConnectorSend webhookUrl: "${WEBHOOK_URL}",
//         factDefinitions: [
//           [name: 'Status', template: 'Pipeline Success']
//         ],
//         message: "Finished ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}>) Commit Message: ${env.GIT_COMMIT_MSG}"
//     }
//     failure {
//       office365ConnectorSend webhookUrl: "${WEBHOOK_URL}",
//         factDefinitions: [
//           [name: 'Status', template: 'Pipeline Failed']
//         ],
//         message: "Finished ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}>) Commit Message: ${env.GIT_COMMIT_MSG}"
//     }
//   }
// }