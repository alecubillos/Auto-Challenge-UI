class Checkout {
    url = '/checkout/';
    form = {
        getFirstName: () => cy.get('#billing_first_name'),
        getLastName: () => cy.get('#billing_last_name'),
        getBillingAddress: () => cy.get('#billing_address_1'),
        getBilingCity: () => cy.get('#billing_city'),
        getZipCode: () => cy.get('#billing_postcode'),
        getBillingPhone: () => cy.get('#billing_phone'),
        getBillingEmail: () => cy.get('#billing_email'),
        getDifferentShippingAddressCheckbox: () => cy.get('#ship-to-different-address-checkbox'),
        getAgreeTermsCheckbox: () => cy.get('#terms'),
        getPlaceOrderButton: () => cy.get('#place_order')

    }
    navigate() {
        cy.visit(this.url)
    }
    agreeToTerms() {
        this.form.getAgreeTermsCheckbox()
    }
    checkSameShippingAddress() {
        this.form.getSameShippingAddressCheckbox()
    }
    placeOrder() {
        this.form.getPlaceOrderButton().click()
    }
    fillOutBillingForm(formDataFixture) {
        cy.fixture(formDataFixture).then(data => {
            this.form.getFirstName().type(data.firstName)
            this.form.getLastName().type(data.lastName)
            this.form.getBillingAddress().type(data.address)
            this.form.getBilingCity().type(data.city)
            this.form.getZipCode().type(data.zipCode)
            this.form.getBillingPhone().type(data.billingPhone)
            this.form.getBillingEmail().type(data.billingEmail)
        })
    }

}
export const checkout = new Checkout();