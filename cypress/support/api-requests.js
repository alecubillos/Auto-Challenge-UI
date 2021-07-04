export class API {

    createProduct() {

        cy.request({
            method: 'POST',
            url: '/wp-json/wc/v3/products',
            auth: {
                user: Cypress.env('username'),
                pass: Cypress.env('password')
            },
            body: {
                "name": "Colombian Jersey",
                "type": "simple",
                "regular_price": "100.00",
                "description": "Official Colombian Jersey from the Copa America 2021.",
                "short_description": "",
                "categories": [
                    {
                        "id": 18
                    }
                ],
                "images": [
                    {
                        "src": "https://todosobrecamisetas.com/wp-content/uploads/camiseta-adidas-colombia-2021-2.jpg"
                    },
                    {
                        "src": "https://todosobrecamisetas.com/wp-content/uploads/camiseta-adidas-colombia-2021-3.jpg"
                    }
                ]
            }
        }).then((response) => {
            Cypress.env('newProductID', response.body.id)
            return response.body.id
        })
    }

    deleteProduct(productID) {
        cy.request({
            method: 'DELETE',
            url: `/wp-json/wc/v3/products/${Cypress.env('newProductID')}?force=true`,
            auth: {
                user: Cypress.env('username'),
                pass: Cypress.env('password')
            },
        })

    }
    addProductToCart(productSKU, productID, quantity) {
        cy.request({
            method: 'POST',
            url: '/?wc-ajax=add_to_cart',
            body: {
                product_sku: productSKU,
                product_id: productID,
                quantity: quantity
            },
            form: true
        })
    }
}
export const api = new API();