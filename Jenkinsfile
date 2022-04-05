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
        sh 'npm config set registry https://registry.npmjs.org/'
        sh 'wget -O - https://registry.npmjs.org'
        sh 'ls'
        sh 'npm ci --prefer-offline --no-audit'
        sh 'npx cypress verify'
      }
    }

   stage('Run Cypress UI Tests') {
   steps {
    sh "npm run test"
    sh "npx allure generate allure-results --clean -o allure-report"
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
