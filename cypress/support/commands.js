// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import LoginPage from "../pages/SauceDemo/LoginPage";
import InventoryPage from "../pages/SauceDemo/InventoryPage";

Cypress.Commands.add('loginSauceDemo', (username,password) => {
    let loginPage = new LoginPage()
    let inventoryPage = new InventoryPage()
    
    cy.visit('https://www.saucedemo.com/')
    loginPage.userNameTextField().type(username)
    loginPage.passwordTextField().type(password)
    loginPage.loginButton().click().wait(1000)

    //Assert
    inventoryPage.containerInventoryList().should('be.visible')
});