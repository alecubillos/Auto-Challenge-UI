class HomePage {
    url = '/'
    elements = {
        getProductTitle: () => cy.get('.wc-block-grid__product-link .wc-block-grid__product-title'),
        getAddToCartButton: () => cy.get('.wp-block-button__link.add_to_cart_button.ajax_add_to_cart'),
        getCartCount: () => cy.get('.cart-contents .count'),
        getCartContentsButton: () => cy.get('.storefront-primary-navigation .cart-contents'),
        getCheckoutButton: () => cy.get('button checkout.wc-forward')
    }
    navigate() {
        cy.visit(this.url)
    }

    addProductAllCategories(product) {

        this.elements.getProductTitle().each(($el, index, $list) => {
            let productTitle = $el.text()
            if (product === productTitle) {
                cy.get('div').within(() => {
                    this.elements.getAddToCartButton().should('be.visible').eq(index).scrollIntoView().click()
                })
            }
        })
    }

}


export const homePage = new HomePage();