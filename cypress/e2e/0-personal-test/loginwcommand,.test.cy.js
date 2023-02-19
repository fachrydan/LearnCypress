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

            cy.loginFake(username, password)

            cy.get('.alert-error').should('contain.text','Login and/or password are wrong.')
    
            cy.login(username, password)
        })
    })

    it('Payment should successfully', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')

        cy.fixture("user").then(user=>{
            const username = user.username
            const password = user.password

            //CALLING A COMMAND / FUNCTION
            cy.login(username, password)
        })

        cy.contains('Pay Bills').click()
    
        cy.fixture("paybillcom").then(bill=>{
            const amount = bill.amount
            const date = bill.date
            const desc = bill.desc

            //CALLING A COMMAND / FUNCTION
            cy.fillPayBills(amount, date, desc)

            cy.get('#pay_saved_payees').click()

            cy.get('#alert_content')
            .should('contain.text','The payment was successfully submitted.')
        })
    })
});