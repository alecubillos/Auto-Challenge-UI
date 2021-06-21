/// <reference types="cypress" />
import HomePage from './PageObjects/HomePage'
import Cart from './PageObjects/Cart'

const homePage = new HomePage()
const cart = new Cart()
const products = ['Sunglasses', 'Cap', 'Belt']
let totalAdded = 0

describe('Cart Totals are calculated correctly', () => {
    before('The landing page is loaded', () => {
        cy.visit('')
    })
    it('Verify the total amount of products in the shopping cart is calculated correctly', () => {
        homePage.addProduct(products, 0)
        homePage.clickCartContents()
        cart.getCartItems()
    })
})
