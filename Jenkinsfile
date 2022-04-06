node {
    CYPRESS_DOCKER_PATH = 'docker/Dockerfile'
}
pipeline {
  agent {
        dockerfile {
              filename "${CYPRESS_DOCKER_PATH}"
      }
    }
    // first stage installs node dependencies and Cypress binary
    stage('Configuration') {
      steps {
        sh 'npm config set registry https://registry.npmjs.org/'
        sh 'ls'
        sh 'wget -O - https://registry.npmjs.org'
        sh 'npm install'
        sh 'npx cypress verify'
      }
    }

   stage('Run Cypress UI Tests') {
   steps {
    sh "npm run test"
    sh "npm run allure:report"
   }
  }

    stage('Publish Reports') {
        steps{
        publishHTML(
                target: [
                        allowMissing         : false,
                        alwaysLinkToLastBuild: false,
                        keepAll              : true,
                        reportDir            : './allure-report',
                        reportFiles          : 'index.html',
                        reportName           : "UI Allure Report"
                ]
        )
    }
    }
  }
}
