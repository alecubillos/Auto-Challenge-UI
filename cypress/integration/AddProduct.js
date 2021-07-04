/// <reference types="cypress" />
import { homePage } from '../PageObjects/HomePage'
import { api } from '../support/api-requests'

describe('Verify the total amount of products in the shopping cart is calculated correctly', () => {
    before(() => {
        homePage.navigate()
        api.createProduct()
        cy.reload()
    })
    it('Verify the total amount of products added', () => {

        homePage.addProductAllCategories('Colombian Jersey')
        homePage.elements.getCartCount().should('contain.text', '2 items')

    })
    after(() => {
        api.deleteProduct(Cypress.env('newProductID'))
    })

})





