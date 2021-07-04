

class ConfirmationPage {
    elements = {
        getConfirmationMessage: () => cy.get('.woocommerce-notice.woocommerce-notice--success.woocommerce-thankyou-order-received')
    }


}
export const confirmationPage = new ConfirmationPage();