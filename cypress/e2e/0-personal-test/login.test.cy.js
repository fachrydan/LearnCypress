/// <reference types="cypress" />

describe ('Working with inputs', () => {
    it('Visit the website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include','login.html')

    });

    it('Should click on Travel Category', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')
    });

    it('Should fill password', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.get('input[name="user_password"]').clear()
        cy.get('input[name="user_password"]').type('password')
    })

    it('Should verified keep me signed in', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.get('input[name="user_remember_me"]')
        .click().should('have.value','on')
    })


    it('Should try to login', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.fixture("user").then(user=>{
            const username = user.username
            const password = user.password

            cy.get('#user_login').clear()
            cy.get('#user_login').type(username)

            cy.get('input[name="user_password"]').clear()
            cy.get('input[name="user_password"]').type(password)

            cy.get('input[name="submit"]').click()

            cy.get('.alert-error').should('contain.text','Login and/or password are wrong.')
    
        })
    })



});