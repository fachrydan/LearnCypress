/// <reference types="cypress" />

describe ('My First test', () => {
    it('Visit the kitchen sink', () => {
        cy.visit('https://example.cypress.io')
        cy.get('h1').contains('Kitchen Sink')
        cy.contains('get').click()
        cy.url().should('include','/commands/querying')
    });
});