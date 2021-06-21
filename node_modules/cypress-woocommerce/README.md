# Cypress WooCommerce 
Adds WooCommerce support to [Cypress](https://www.cypress.io/).

## Installation

```bash
npm install -D cypress-woocommerce
```

## Usage

Example:
~~~js
import {
	CustomerFlow,
	StoreOwnerFlow
} from 'cypress-woocommerce';

describe( 'Cart page', () => {
	before( () => {
		StoreOwnerFlow.login();
		StoreOwnerFlow.openSettings();
		StoreOwnerFlow.logout();
	} );

	it( 'should display no item in the cart', () => {
		CustomerFlow.goToCart()
		cy.contains( '.cart-empty', 'Your cart is currently empty.' )
	} );
} );
~~~
