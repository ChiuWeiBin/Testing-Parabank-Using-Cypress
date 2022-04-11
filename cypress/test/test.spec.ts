/// <reference types="cypress" />
/// <reference types="@shelex/cypress-allure-plugin" />

describe('Parabank - demo site', () => {
  beforeEach(() => {
    cy.allure().logStep('Open the application')

    cy.visit('/parabank/index.htm')
    cy.allure()
      .severity('blocker')
      .description('Login page')
      .owner('Chiu Wei Bin')
      .story('Register a new user')
      .tms('XRay', '121')
      .tag('this is nice tag', 'as well as this')
  })

  it.only('contains correct url', () => {
    cy.allure().writeEnvironmentInfo({
      Browser: Cypress.browser.displayName,
      Version: Cypress.browser.version,
      Channel: Cypress.browser.channel,
      Family: Cypress.browser.family,
    })
    cy.allure().logStep('Check the correct url')

    cy.url().should('equal', Cypress.config().baseUrl + '/parabank/index.htm')
  })

  it('redirect to sign up', () => {
    cy.allure().logStep('Click on the register button')

    cy.contains('#loginPanel  p', 'Register').find('a').click()
    cy.allure().logStep('Check the register URL')

    cy.url()
      .should(
        'include',
        Cypress.config().baseUrl + '/parabank/register.htm;jsessionid=',
      )
      .should('have.callCount')

    // cy.url().contains(
    //   Cypress.config().baseUrl + '/parabank/register.htm;jsessionid=',
    // )
    // TODOadd regex
  })
})
