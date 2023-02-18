/// <reference types="cypress" />

describe ('My First Test', () => {
    it('clicking "type" shows the right headings', () => {
        cy.visit('https://example.cypress.io')

        cy.pause()

        cy.contains('type').click()

        cy.url().should('include','/commands/actions')

         cy.get('.action-email')
         .type('test@gmail.com')
         .should('have.value','test@gmail.com')
    });
});