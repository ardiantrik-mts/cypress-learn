/// <reference types="cypress"/>

import LoginPage from "../../pages/SauceDemo/LoginPage";
import InventoryPage from "../../pages/SauceDemo/InventoryPage";

describe('SauceDemo: Login Page Test', () => {
    let loginPage = new LoginPage()
    let inventoryPage = new InventoryPage()


    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })

    it('Failed Login: Empty Username and Password', () => {
        loginPage.loginButton().click().wait(1000)

        //Assert
        loginPage.alertInvalid().should('have.text','Epic sadface: Username is required')
    })

    it('Failed Login: Fill Username Only', () => {
        loginPage.userNameTextField().type('standard_user')
        loginPage.loginButton().click().wait(1000)

        //Assert
        loginPage.alertInvalid().should('have.text','Epic sadface: Password is required')
    })

    it('Failed Login: Fill All, but Wrong Password', () => {
        loginPage.userNameTextField().type('standard_user')
        loginPage.passwordTextField().type('123')
        loginPage.loginButton().click().wait(1000)

        //Assert
        loginPage.alertInvalid().should('have.text','Epic sadface: Username and password do not match any user in this service')
    })

    it('Success Login: Fill All', () => {
        loginPage.userNameTextField().type('standard_user')
        loginPage.passwordTextField().type('secret_sauce')
        loginPage.loginButton().click().wait(1000)

        //Assert
        inventoryPage.containerInventoryList().should('be.visible')
    })
  })