/// <reference types="cypress" />

describe ('Test Login Willy Wears Web', () => {
    it('Should try to login with Alert', () => {
        cy.visit('https://willywears.masuk.id/')

        cy.pause()

        cy.contains('Login').click()

        cy.fixture("userwilly").then(user=>{
            const username = user.usernameFake
            const password = user.passwordFake

            //AUTHENTICATION
            cy.get('#exampleInputEmail').clear()
            cy.get('#exampleInputEmail').type(username)

            cy.get('input[name="password"]').clear()
            cy.get('input[name="password"]').type(password)

            //BUTTON
            cy.contains('Login').click()

            //ALERT
            cy.get('.text-danger').should('contain.text','The Username field is required.')

        })
    })

    it('Should try to login into Home Page and Checkout', () => {
        cy.visit('https://willywears.masuk.id/')

        cy.contains('Login').click()

        cy.fixture("userwilly").then(user=>{
            const username = user.username
            const password = user.password

            //AUTHENTICATION
            cy.get('#exampleInputEmail').clear()
            cy.get('#exampleInputEmail').type(username)

            cy.get('input[name="password"]').clear()
            cy.get('input[name="password"]').type(password)

            //BUTTON
            cy.contains('Login').click()

            cy.contains('Produk').click()

            cy.contains('Detail').click()
    
            cy.contains('Beli Sekarang').click()

            cy.contains('Pembayaran').click()

            //cy.contains('Chekout').click()

            cy.get('button').contains('Chekout').click()

            cy.get('.text-danger').should('contain.text','The Name field is required.')
            cy.get('.text-danger').should('contain.text','The Address field is required.')
            cy.get('.text-danger').should('contain.text','The Phone number field is required.')
            cy.get('.text-danger').should('contain.text','The Select field is required.')
            
            cy.get('input[name="nama"]').type('Fachry Ramadhan')
            cy.get('input[name="alamat"]').type('Jagakarsa')
            cy.get('input[name="no_telp"]').type('0123987654')
            cy.get('select').select('BCA 12345678 an: willywears')
            cy.get('button').contains('Chekout').click()

        })

    })

    // it('Should buy a product for example', () => {
    //     cy.visit('https://willywears.masuk.id/index.php/Welcome')

    // })


    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
});