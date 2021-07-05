/// <reference types="cypress" />
import { homePage } from '../PageObjects/HomePage'
import { api } from '../support/api-requests'
import { cart } from '../PageObjects/Cart'


describe('Cart Totals are calculated correctly', () => {
    before(() => {
        homePage.navigate()
        api.addProductToCart('', 38, 3)
        cart.navigate()
    })
    it('Verify the total amount of products in the shopping cart is calculated correctly', () => {
        cart.elements.getProductQuantity().should('have.value', '3')
    })
    it('Verify the subtotal in the order is calculated correctly', () => {
        cart.elements.getCartSubtotal().should('contain.text', '$54.00')
    })
    it('Verify the total in the order is calculated correctly', () => {
        cart.elements.getOrderTotal().should('contain.text', '$54.00')
    })
})
