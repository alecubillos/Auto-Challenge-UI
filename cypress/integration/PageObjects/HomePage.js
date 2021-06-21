class HomePage {

    getProductTitle() {
        return cy.get('.wc-block-grid__product-link .wc-block-grid__product-title').should('be.visible')
    }
    getAddToCart() {
        return cy.get('.wp-block-button__link.add_to_cart_button.ajax_add_to_cart').should('be.visible')
    }
    getCartCount() {
        return cy.get('.cart-contents .count')
    }
    getLoadingSpinner() {
        return cy.get('.add_to_cart_button.ajax_add_to_cart.loading').should('not.exist')
    }
    clickCartContents() {
        cy.get('.storefront-primary-navigation .cart-contents').click()
    }
    clickCheckOut() {
        cy.get('button checkout.wc-forward').click()
    }

    addProduct(products, added) {
        let indexProduct
        cy.get('.wc-block-grid__product-link .wc-block-grid__product-title').should('be.visible')
            .each(($el, index, $list) => {
                products.forEach((product) => {
                    let text = $el.text()

                    if (text === product) {
                        cy.get('div').within(() => {
                            cy.get('.wp-block-button__link.add_to_cart_button.ajax_add_to_cart').should('be.visible')
                                .eq(index).scrollIntoView().click()
                            indexProduct = products.indexOf(indexProduct)
                            products.splice(indexProduct, 1)
                        })
                        added++
                        let validationText;
                        added > 1
                            ?
                            validationText = `${added} items` :
                            validationText = `${added} item`
                        cy.get('.cart-contents .count').should('have.text', validationText)

                    }

                })
            })


    }
    verifyCartTotal(added) {

    }
}


export default HomePage;