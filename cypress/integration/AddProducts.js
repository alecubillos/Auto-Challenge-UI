/// <reference types="cypress" />
import HomePage from './PageObjects/HomePage'
const homePage = new HomePage()

const products = ['Hoodie', 'Hoodie with Zipper', 'Hoodie with Pocket']
const productsLength = products.length
let added = 0



describe('Verify the total amount of products in the shopping cart is calculated correctly', () => {
    before('The landing page is loaded', () => {
        cy.visit('')
    })
    it('Verify the total amount of products added', () => {
        homePage.addProduct(products, 0)

    })

})





