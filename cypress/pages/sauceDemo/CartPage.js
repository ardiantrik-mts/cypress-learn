class CartPage{
    //CART MAIN PAGE
    buttonRemoveProduct1(){
        return cy.xpath('//button[@id="remove-sauce-labs-backpack"]')
    }

    buttonRemoveProduct2(){
        return cy.xpath('//button[@id="remove-sauce-labs-bike-light"]')
    }

    buttonBackToInventory(){
        return cy.xpath('//button[@id="continue-shopping"]')
    }

    buttonCheckout(){
        return cy.xpath('//button[@id="checkout"]')
    }

    //CART CHECKOUT RECIPIENT PAGE
    textfieldFirstName(){
        return cy.xpath('//input[@id="first-name"]')
    }

    textfieldLastName(){
        return cy.xpath('//input[@id="last-name"]')
    }

    textfieldPostalCode(){
        return cy.xpath('//input[@id="postal-code"]')
    }

    buttonContinue(){
        return cy.xpath('//input[@id="continue"]')
    }

    alertFieldRequired(){
        return cy.path('//div[@class="error-message-container error"]')
    }

    buttonCancel(){
        return cy.xpath('//button[@id="cancel"]')
    }

    //CART CHECKOUT OVERVIEW PAGE
    buttonFinish(){
        return cy.xpath('//button[@id="finish"]')
    }

    //CART CHECKOUT COMPLETE PAGE
    containerCheckoutComplete(){
        return cy.xpath('//div[@id="checkout_complete_container"]')
    }

    buttonBactoToInventory(){
        return cy.xpath('//button[@id="back-to-products"]')
    }
}
export default CartPage