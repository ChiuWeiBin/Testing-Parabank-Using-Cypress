import { defineConfig } from 'cypress'

export default defineConfig({
  watchForFileChanges: false,
  chromeWebSecurity: false,
  env: {
    allure: true,
    allureAddVideoOnPass: true,
    tmsPrefix: 'https://www.google.com/',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.ts')(on, config)
    },
    baseUrl: 'https://parabank.parasoft.com',
    specPattern: 'cypress/test/**/*.cy.{js,jsx,ts,tsx}',
  },
})
