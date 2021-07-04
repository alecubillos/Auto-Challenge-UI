class Cart {

    proceedToCheckout() {
        cy.get('.checkout-button.button.alt.wc-forward').click()
    }
    getCartItems() {
        let price, quantity, subtotalPerItem
        let subtotal = 0
        cy.get('.shop_table .woocommerce-cart-form__cart-item.cart_item')
            .each(($product, index, $list) => {

                cy.get('.product-price').eq(index + 1).invoke('text').then((text => {
                    price = parseFloat(text.replace('$', ''))
                }))
                cy.get('.input-text.qty.text').eq(index).invoke('val').then((value => {
                    quantity = parseInt(value)
                }))
                cy.get('.product-subtotal').eq(index + 1).invoke('text').then((text => {
                    subtotalPerItem = price * quantity
                    subtotal += subtotalPerItem
                    expect(text).to.include(subtotalPerItem)
                }))

            }).then(function () {
                cy.get('.cart-subtotal .woocommerce-Price-amount.amount').should('contain', subtotal)
            })

    }

}
export const cart = new Cart();