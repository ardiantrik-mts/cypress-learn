/// <reference types="cypress"/>

import LoginPage from "../../pages/sauceDemo/LoginPage";

describe('Login Page Test', () => {
    let loginPage = new LoginPage()

    beforeEach(() => {
        cy.visit('http://saucedemo.com')
    })

    it('visit web', () => {
        //workspace init
    })
  })