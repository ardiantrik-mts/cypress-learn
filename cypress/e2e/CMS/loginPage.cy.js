import LoginPage from "../../pages/CMS/LoginPage";

describe('Login Page Test', () => {
    let loginPage = new LoginPage()

    beforeEach(() => {
        cy.visit('http://crstest01.mitrais.com/CRS.UI.Web/')
    })

    it('Failed Login: Empty Username and Password', () => {
        loginPage.loginButton().click().wait(1000)

        //Assert
        loginPage.alertInvalid().should('be.visible')
    })

    it('Failed Login: Fill Username Only', () => {
        loginPage.userNameTextField().type('Ardian_K315')
        loginPage.loginButton().click().wait(1000)

        //Assert
        loginPage.alertInvalid().should('be.visible')
    })

    it('Failed Login: Fill All, but Wrong Password', () => {
        loginPage.userNameTextField().type('Ardian_K315')
        loginPage.passwordTextField().type('123')
        loginPage.loginButton().click().wait(1000)

        //Assert
        loginPage.alertInvalid().should('be.visible')
    })
  })