/// <reference types="cypress" />
import { homePage } from '../PageObjects/HomePage'
import { checkout } from '../PageObjects/Checkout'
import { cart } from '../PageObjects/Cart'
import { confirmationPage } from '../PageObjects/ConfirmationPage'


describe('Verify the user is able to place an order', () => {

    before(function () {
        homePage.navigate()
    })

    it('Verify the Order was created correctly', () => {

        homePage.addProductAllCategories('Hoodie');
        homePage.addProductAllCategories('Cap');
        homePage.addProductAllCategories('Polo');
        homePage.elements.getCartContentsButton().click()

        cart.proceedToCheckout()

        checkout.fillOutBillingForm('checkoutForm')
        checkout.form.getDifferentShippingAddressCheckbox().uncheck()
        checkout.form.getAgreeTermsCheckbox().check()
        checkout.form.getPlaceOrderButton().click()


        confirmationPage.elements.getConfirmationMessage().should('have.text', 'Thank you. Your order has been received.')


    })

})
