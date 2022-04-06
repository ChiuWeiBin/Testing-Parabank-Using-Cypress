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
        sh 'export CYPRESS_CACHE_FOLDER=/home/weibin/.cache/Cypress/9.5.3/Cypress'
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
