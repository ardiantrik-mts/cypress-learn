class LoginPage{
    userNameTextField(){
        return cy.xpath('//input[@id="UserName"]')
    }

    passwordTextField(){
        return cy.xpath('//input[@id="Password"]')
    }

    loginButton(){
        return cy.xpath('//button[@id="btn-login"]')
    }

    alertInvalid(){
        return cy.xpath('//div[@class="uk-alert-danger uk-alert"]')
        // return cy.xpath('//li[text()="Incorrect User ID or Password."]')
    }

}
export default LoginPage