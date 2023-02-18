/// <reference types="cypress" />

describe ('My Second Test', () => {
    it('clicking "type" shows the right headings', () => {
        cy.visit('https://example.cypress.io')

        cy.pause()

        cy.contains('get').click()

        cy.url().should('include','/commands/querying')

        // cy.get('.query-form')
        // .type('test@gmail.com')
        // .should('have.value','')

        cy.get('.query-form').within(() => {
            cy.get('input:first')
            .type('test@gmail.com')
            .should('have.value', 'test@gmail.com')

            cy.get('input:last')
            .type('coba123')
            .should('have.value', 'coba123')
          })
    });
});