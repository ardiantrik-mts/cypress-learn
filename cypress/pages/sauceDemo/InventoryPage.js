
class InventoryPage{
    containerInventoryList(){
        return cy.xpath('//div[@class="inventory_list"]')
    }

    buttonAddToCartProduct1(){
        return cy.xpath('//button[@id="add-to-cart-sauce-labs-backpack"]')
    }

    buttonRemoveFromCartProduct1(){
        return cy.xpath('//button[@id="remove-sauce-labs-backpack"]')
    }

    buttonAddToCartProduct2(){
        return cy.xpath('//button[@id="add-to-cart-sauce-labs-bike-light"]')
    }

    buttonRemoveFromCartProduct2(){
        return cy.xpath('//button[@id="remove-sauce-labs-bike-light"]')
    }

    badgeCounterCart(){
        return cy.xpath('//span[@class="shopping_cart_badge"]')
    }

    buttonCart(){
        return cy.xpath('//a[@class="shopping_cart_link"]')
    }

}
export default InventoryPage