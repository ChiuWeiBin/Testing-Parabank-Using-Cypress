#!groovy

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
        sh 'npm install'
        sh 'npx cypress verify'
      }
    }

    stage('Run Cypress UI Tests') {
      steps {
        sh "npm run test"
        // sh "npm run allure:report"
      }
    }

    stage('Publish Allure Reports') {
      steps {
        allure includeProperties: false, jdk: '', results: [
          [path: 'allure-results']
        ]
        publishHTML(
          target: [
            allowMissing: false,
            alwaysLinkToLastBuild: false,
            keepAll: true,
            reportDir: './allure',
            reportFiles: 'index.html',
            reportName: "UI Allure Report"
          ]
        )
      }
    }
    stage('Publish Mochasome Reports') {
      steps {
        publishHTML(
          target: [
            allowMissing: false,
            alwaysLinkToLastBuild: false,
            keepAll: true,
            reportDir: './cypress/reports',
            reportFiles: 'index.html',
            reportName: "Cyrpess Mochasome Report"
          ]
        )
      }
    }
  }
}