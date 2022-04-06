pipeline {
  agent any
  stages {
    stage('Clone scm') {
        steps {
          checkout scm
        }
    }
    // first stage installs node dependencies and Cypress binary
    stage('Configuration') {
      steps {
        sh 'rm -rf node_modules'
        sh 'npm install'
        sh 'npm install --save-dev cypress'
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
