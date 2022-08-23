class LoginPage{
    textfieldUsername(){
        return cy.xpath('//input[@id="user-name"]')
    }

    textfieldPassword(){
        return cy.xpath('//input[@id="password"]')
    }

    buttonLogin(){
        return cy.xpath('//input[@id="login-button"]')
    }

    alertInvalid(){
        return cy.xpath('//div[@class="error-message-container error"]')
        // return cy.xpath('//li[text()="Incorrect User ID or Password."]')
    }

}
export default LoginPage