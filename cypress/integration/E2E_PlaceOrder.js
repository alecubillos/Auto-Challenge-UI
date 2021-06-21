/// <reference types="cypress" />
import HomePage from './PageObjects/HomePage'
import Checkout from './PageObjects/Checkout'
import Cart from './PageObjects/Cart'
import {
    CustomerFlow,
    StoreOwnerFlow
} from 'cypress-woocommerce';
import ConfirmationPage from './PageObjects/ConfirmationPage'

const homePage = new HomePage()
const checkout = new Checkout()
const cart = new Cart()
const confirmationPage = new ConfirmationPage()

const products = ['Hoodie', 'Hoodie with Zipper', 'Hoodie with Pocket']
let totalAdded = 0

describe('Verify the user is able to place an order', () => {

    beforeEach(function () {
        cy.visit('')
    })

    it('Verify the Order was created correctly', () => {
        cy.fixture('checkoutForm.json').then(form => {
            totalAdded = homePage.addProduct(products, 0)
            homePage.clickCartContents()
            cart.proceedToCheckout()
            checkout.typeFirstName(form.firstName)
            checkout.typeLastName(form.lastName)
            checkout.typeBillingAddress(form.address)
            checkout.typeBilingCity(form.city)
            checkout.typeZIP(form.zip)
            checkout.typeBillingPhone(form.billingPhone)
            checkout.typeBillingEmail(form.billingEmail)
            checkout.clickSameShippingAddress()
            checkout.agreeTerms()
            checkout.placeOrder()
            confirmationPage.getConfirmationMessage()

        })
    })


})
