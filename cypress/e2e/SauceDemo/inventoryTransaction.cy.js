/// <reference types="cypress"/>

import InventoryPage from "../../pages/SauceDemo/InventoryPage";

describe('SauceDemo: Inventory Page Test', () => {
    let inventoryPage = new InventoryPage()


    beforeEach(() => {
        const username = "standard_user"
        const password = "secret_sauce"
        cy.loginSauceDemo(username, password)
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
  })