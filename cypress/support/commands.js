// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//<reference types="Cypress" />
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-iframe'
import '@4tw/cypress-drag-drop'
import 'cypress-file-upload'

Cypress.Commands.add('loginOCRM', (username = 'Admin', password = 'admin123') => {
  cy.get('[name="username"]').type(username)
  cy.get('[name="password"]').type(password)
  cy.get('[type="submit"]').click()
})

Cypress.Commands.add('visitPage', (url) => {
  cy.visit(url)
})

Cypress.Commands.add('typeText', (selector, text) => {
  cy.get(selector).clear().type(text)
})

Cypress.Commands.add('checkTheBox', (selector) => {
  cy.get(selector).check()
})

Cypress.Commands.add('verifyCheckBox', (selector) => {
  cy.get(selector).should('be.checked')
})

Cypress.Commands.add('selectDropdownByValue', (selector, optionValue) => {
  cy.get(selector).select(optionValue)
})

Cypress.Commands.add('clickButtonByLocator', (selector) => {
  cy.get(selector).click()
})

Cypress.Commands.add('elementContainsText', (selector, text) => {
  cy.get(selector).should('contain', text)
})