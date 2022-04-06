node {
    CYPRESS_DOCKER_PATH = 'docker/Dockerfile'
}

pipeline {
  agent {
        dockerfile {
              filename "${CYPRESS_DOCKER_PATH}"
      }
  }
  stages {
    // first stage installs node dependencies and Cypress binary
    stage('Configuration') {
      steps {
        echo "Running build ${env.BUILD_ID} on ${env.JENKINS_URL}"
        sh 'npm config set registry https://registry.npmjs.org/'
        sh 'npm install'
        sh 'npx cypress verify'
      }
    }

   stage('Run Cypress UI Tests') {
   steps {
    sh "npm run test"
    sh "npx allure generate reports/ui/allure-results --clean -o reports/ui/allure-report"
   }
  }

    stage('Publish Reports') {
        steps{
        publishHTML(
                target: [
                        allowMissing         : false,
                        alwaysLinkToLastBuild: false,
                        keepAll              : true,
                        reportDir            : './reports/ui/allure-report',
                        reportFiles          : 'index.html',
                        reportName           : "UI Allure Report"
                ]
        )
    }
    }
  }
}
