/// <reference types="cypress" />

describe ('Test Login SwagLabs', () => {
    it('Should try to login', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.fixture("user").then(user=>{
            const username = user.username
            const password = user.password

            // cy.get('#user-name').clear()
            // cy.get('#user-name').type(username)

            // cy.get('input[name="password"]').clear()
            // cy.get('input[name="password"]').type(password)

            // cy.get('input[name="login-button"]').click()

            //cy.get('.alert-error').should('contain.text','Login and/or password are wrong.')

        })
    })



});