class Checkout {

    typeFirstName(name) {
        cy.get('#billing_first_name').type(name)
    }
    typeLastName(lastName) {
        cy.get('#billing_last_name').type(lastName)
    }
    typeBillingAddress(address) {
        cy.get('#billing_address_1').type(address)
    }
    typeBilingCity(city) {
        cy.get('#billing_city').type(city)
    }
    typeZIP(zip) {
        cy.get('#billing_postcode').type(zip)
    }
    typeBillingPhone(billingPhone) {
        cy.get('#billing_phone').type(billingPhone)
    }
    typeBillingEmail(billingEmail) {
        cy.get('#billing_email').type(billingEmail)
    }
    clickSameShippingAddress() {
        cy.get('#ship-to-different-address-checkbox').click()
    }
    agreeTerms() {
        cy.get('#terms').click()
    }
    placeOrder() {
        cy.get('#place_order').click()
    }
}
export default Checkout;