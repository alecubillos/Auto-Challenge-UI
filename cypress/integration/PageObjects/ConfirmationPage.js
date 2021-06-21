

class ConfirmationPage {
    getConfirmationMessage() {
        cy.get('.woocommerce-notice.woocommerce-notice--success.woocommerce-thankyou-order-received')
            .should('have.text', 'Thank you. Your order has been received.')
    }
}
export default ConfirmationPage;