/// <reference types="cypress"/>

import InventoryPage from "../../pages/SauceDemo/InventoryPage";
import CartPage from "../../pages/SauceDemo/CartPage";

describe('SauceDemo: Inventory Page Test', () => {
    let inventoryPage = new InventoryPage()
    let cartPage = new CartPage()


    beforeEach(() => {
        const username = "standard_user"
        const password = "secret_sauce"
        cy.loginSauceDemo(username, password)
    })

    it('Add and Remove Product', () => {
        inventoryPage.buttonAddToCartProduct1().click()
        inventoryPage.buttonRemoveFromCartProduct1().should('be.visible')

        inventoryPage.buttonRemoveFromCartProduct1().click()
        inventoryPage.buttonAddToCartProduct1().should('be.visible')
    })

    it('Counter in Cart Test', () => {
        inventoryPage.buttonAddToCartProduct1().click()

        inventoryPage.badgeCounterCart().should('have.text', "1")
        inventoryPage.buttonRemoveFromCartProduct1().should('be.visible')

        inventoryPage.buttonAddToCartProduct2().click()
        inventoryPage.badgeCounterCart().should('have.text', "2")
        inventoryPage.buttonRemoveFromCartProduct2().should('be.visible')

        inventoryPage.buttonRemoveFromCartProduct1().click()
        inventoryPage.buttonRemoveFromCartProduct2().click()
        inventoryPage.badgeCounterCart().should('not.exist')
    })

    it('Full Transaction Test', () => {
        inventoryPage.buttonAddToCartProduct1().click()
        inventoryPage.buttonAddToCartProduct2().click()
        inventoryPage.buttonCart().click()

        cartPage.buttonCheckout().click()

        cartPage.textfieldFirstName().type('testing')
        cartPage.textfieldLastName().type('automation')
        cartPage.textfieldPostalCode().type('991002')
        cartPage.buttonContinue().click()

        cartPage.buttonFinish().click()

        cartPage.containerCheckoutComplete().should('be.visible')
    })
  })