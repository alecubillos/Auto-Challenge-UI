export class Cart {
    url = '/cart/'
    elements = {
        getCheckoutButton: () => cy.get('.checkout-button'),
        getProductName: () => cy.get('.product-name'),
        getCartSubtotal: () => cy.get('td.product-subtotal'),
        getProductQuantity: () => cy.get('.input-text.qty.text'),
        getOrderTotal: () => cy.get('.order-total')
    }
    navigate() {
        cy.visit(this.url)
    }
    proceedToCheckout() {
        this.elements.getCheckoutButton().click()
    }
}
export const cart = new Cart();