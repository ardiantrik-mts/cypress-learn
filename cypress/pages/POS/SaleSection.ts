class SaleSection{

    elementsSaleSection = {
        buttonFavourites: (): string => '//div[contains(@class, "tab-container")]/descendant::span[contains(text(), "Favourites")]/parent::button',
        contentItem: (item: string): string => '//div[contains(@class, "tab-container")]/descendant::p[contains(text(), "'+item+'")]',
        fieldSearchItem: (): string => '//div[contains(@class, "tab-container")]/descendant::label[text()="Search Product/Service"]/parent::div/descendant::input',
        buttonClearSearch: (): string => '//div[contains(@class, "tab-container")]/descendant::label[text()="Search Product/Service"]/parent::div/descendant::em[contains(@class, "ic-close-circle")]',
        buttonSearchType: (): string => '//div[contains(@class, "tab-container")]/descendant::label[text()="Search Product/Service"]/parent::div/descendant::nb-select/button',
        dropdownSearchType: (searchType): string => '//div[@class="cdk-overlay-container"]/descendant::nb-option[contains(text(), "'+searchType+'")]',
        buttonCheckout: (): string => '//div[contains(@class, "tab-container")]/descendant::span[contains(text(), "Checkout")]/parent::button',
        fieldPrice: (item: string): string => '//td[text()="'+item+'"]/following-sibling::td/descendant::input[@name="formSaleAddItemsPrice"]',
        buttonIncreaseQty: (item: string): string => '//td[text()="'+item+'"]/following-sibling::td/descendant::span[text()="+"]/parent::button',
        buttonDecreaseQty: (item: string): string => '//td[text()="'+item+'"]/following-sibling::td/descendant::span[text()="-"]/parent::button',
        fieldDiscount: (item: string): string => '//td[text()="'+item+'"]/following-sibling::td/descendant::span[text()="%"]/parent::button/preceding-sibling::input',
        buttonRemoveItem: (item: string): string => '//td[text()="'+item+'"]/preceding-sibling::td/descendant::em[contains(@class, "ic-close-circle danger")]',
        buttonBack: (): string => '//div[contains(@class, "tab-container")]/descendant::em[contains(@class,"ic-arrow-left")]/parent::button',
        buttonCloseLoyaltyPopup: (): string => '//div[contains(@class, "ac-body")]/descendant::span[contains(text(), "Close")]/parent::button',
    }

    //Sale Section
    clickFavouriteSection(): void{
        cy.xpath(this.elementsSaleSection.buttonFavourites()).click()
    }

    clickSelectedItem(item: string): void{
        cy.xpath(this.elementsSaleSection.contentItem(item)).click()
    }

    searchItem(item: string): void{
        cy.xpath(this.elementsSaleSection.fieldSearchItem()).type('{selectall}'+item, {delay: 500})
    }

    assertItemExist(item: string): void{
        cy.xpath(this.elementsSaleSection.contentItem(item)).should('exist')
    }

    assertItemNoExist(item: string): void{
        cy.xpath(this.elementsSaleSection.contentItem(item)).should('not.exist')
    }

    clickSearchType(): void{
        cy.xpath(this.elementsSaleSection.buttonSearchType()).click()
    }

    clickSelectedSearchType(searchType: string): void{
        cy.xpath(this.elementsSaleSection.dropdownSearchType(searchType)).click()
    }

    clickCheckout(): void{
        cy.xpath(this.elementsSaleSection.buttonCheckout()).click({force: true})
    }

    assertCheckoutDisabled(): void{
        cy.xpath(this.elementsSaleSection.buttonCheckout()).should('be.disabled')
    }

    enterPriceInTable(item: string, price: string): void{
        cy.xpath(this.elementsSaleSection.fieldPrice(item)).type(price)
    }

    clickIncreaseQtyInTable(item: string): void{
        cy.xpath(this.elementsSaleSection.buttonIncreaseQty(item)).click()
    }

    clickDecreaseQtyInTable(item: string): void{
        cy.xpath(this.elementsSaleSection.buttonDecreaseQty(item)).click()
    }

    enterDiscountInTable(item: string, discount: string): void{
        cy.xpath(this.elementsSaleSection.fieldDiscount(item)).type(discount)
    }

    clickRemoveItemInTable(item: string): void{
        cy.xpath(this.elementsSaleSection.buttonRemoveItem(item)).click()
    }

    clickCloseLoyalty(): void{
        cy.xpath(this.elementsSaleSection.buttonCloseLoyaltyPopup()).click()
    }

    elementsItemForm = {
        fieldComments: (): string => '//label[contains(text(),"Comments")]/following-sibling::textarea',
        fieldDiscount: (): string => '//label[contains(text(),"Discount")]/following-sibling::div/input',
        fieldQuantity: (): string => '//label[contains(text(),"Qty")]/following-sibling::div/input',
        buttonIncreaseQty: (): string => '//label[contains(text(),"Qty")]/following-sibling::div/descendant::span[text()="+"]',
        buttonDecreaseQty: (): string => '//label[contains(text(),"Qty")]/following-sibling::div/descendant::span[text()="-"]',
        buttonFavourite: (): string => '//div[contains(@class, "ac-footer")]/descendant::em[contains(@class, "ic-heart")]/parent::button',
        buttonAddTransactions: (): string => '//div[contains(@class, "ac-footer")]/descendant::span[contains(text(), "Add Transactions")]/parent::button',
        buttonCancel: (): string => '//div[contains(@class, "ac-footer")]/descendant::span[contains(text(), "Cancel")]/parent::button',
        buttonClose: (): string => '//div[contains(@class, "ac-header")]/descendant::em[contains(@class, "ic-close-circle")]/parent::button',
    }

    //Item Form
    clickAddTransactions(): void{
        cy.xpath(this.elementsItemForm.buttonAddTransactions()).click()
    }

    clickIncreaseQty(): void{
        cy.xpath(this.elementsItemForm.buttonIncreaseQty()).click()
    }

    clickDecreaseQty(): void{
        cy.xpath(this.elementsItemForm.buttonDecreaseQty()).click()
    }

    enterDiscount(discount: string): void{
        cy.xpath(this.elementsItemForm.fieldDiscount()).type(discount)
    }

    clickCancel(): void{
        cy.xpath(this.elementsItemForm.buttonCancel()).click()
    }

    clickClose(): void{
        cy.xpath(this.elementsItemForm.buttonClose()).click()
    }

    clickFavourite(): void{
        cy.xpath(this.elementsItemForm.buttonFavourite()).click()
    }
    

    elementsTransactionRecap = {
        buttonPaymentMethod: (iteration: number): string => '(//label[text()="Payment Method"]/parent::div/descendant::nb-select/button)['+iteration+']',
        dropdownPaymentMethod: (paymentMethod: string): string => '//div[@class="cdk-overlay-container"]/descendant::nb-option[contains(text(), "'+paymentMethod+'")]',
        fieldPaymentAmount: (iteration: number): string => '(//div[contains(@class, "payment-input")]/descendant::input)['+iteration+']',
        buttonAddAnotherPaymentMethod: (): string => '//span[contains(text(), "Add another payment method")]/parent::button',
        buttonFinishSale: (): string => '//div[contains(@class, "ac-body")]/descendant::span[contains(text(), "Finish Sale")]/parent::button',
    }

    //Transaction Recap Modal
    clickPaymentMethod(iteration: number): void{
        cy.xpath(this.elementsTransactionRecap.buttonPaymentMethod(iteration)).click()
    }

    clickSelectedPaymentMethod(paymentMethod: string): void{
        cy.xpath(this.elementsTransactionRecap.dropdownPaymentMethod(paymentMethod)).click()
    }

    enterPaymentAmount(amount: string,iteration: number): void{
        cy.xpath(this.elementsTransactionRecap.fieldPaymentAmount(iteration)).type('{selectall}'+amount, {delay: 500})
    }

    clickAddAnotherPaymentMethod(): void{
        cy.xpath(this.elementsTransactionRecap.buttonAddAnotherPaymentMethod()).click()
    }

    clickFinishSale(): void{
        cy.xpath(this.elementsTransactionRecap.buttonFinishSale()).click()
    }

    assertFinishSaleDisabled(): void{
        cy.xpath(this.elementsTransactionRecap.buttonFinishSale()).should('be.disabled')
    }

    elementsMobile = {
        buttonFinishSale: (): string => '//div[contains(@class, "ac-footer")]/descendant::span[contains(text(), "Finish Sale")]/parent::button',
        contentItem: (item: string): string => '//div[contains(@class, "mobile-section")]/descendant::p[contains(text(), "'+item+'")]',
        fieldSearchItem: (): string => '//div[contains(@class, "mobile-section")]/descendant::label[text()="Search Product/Service"]/parent::div/descendant::input',
        buttonClearSearch: (): string => '//div[contains(@class, "mobile-section")]/descendant::label[text()="Search Product/Service"]/parent::div/descendant::em[contains(@class, "ic-close-circle")]',
        buttonSearchType: (): string => '//div[contains(@class, "mobile-section")]/descendant::label[text()="Search Product/Service"]/parent::div/descendant::nb-select/button',
        buttonViewCart: (): string => '//span[contains(text(), "View Cart")]/parent::button',
        buttonFavourites: (): string => '//div[contains(@class, "mobile-section")]/descendant::span[contains(text(), "Favourites")]/parent::button',
        buttonBack: (): string => '//div[contains(@class, "mobile-section")]/descendant::em[contains(@class,"ic-arrow-left")]/parent::button',
        buttonCheckout: (): string => '//div[contains(@class, "mobile-section")]/descendant::span[contains(text(), "Checkout")]/parent::button',
        buttonRemoveItem: (item: string): string => '//div[contains(@class, "mobile-section")]/descendant::h4[text()="'+item+'"]/parent::div/following-sibling::div/descendant::em[contains(@class,"ic-trash")]/parent::button',
        dd: (): string => '',
    }

    // Mobile View Adjustment
    clickFavouriteSectionMobile(): void{
        cy.xpath(this.elementsMobile.buttonFavourites()).click()
    }

    clickSelectedItemMobile(item: string): void{
        cy.xpath(this.elementsMobile.contentItem(item)).click()
    }

    searchItemMobile(item: string): void{
        cy.xpath(this.elementsMobile.fieldSearchItem()).type('{selectall}'+item, {delay: 500})
    }

    clickRemoveItemMobile(item: string): void{
        cy.xpath(this.elementsMobile.buttonRemoveItem(item)).click()
    }

    clickCheckoutMobile(): void{
        cy.xpath(this.elementsMobile.buttonCheckout()).click({force: true})
    }

    clickSearchTypeMobile(): void{
        cy.xpath(this.elementsMobile.buttonSearchType()).click()
    }

    clickClearSearchMobile(): void{
        cy.xpath(this.elementsMobile.buttonClearSearch()).click()
    }

    clickViewCartMobile(): void{
        cy.xpath(this.elementsMobile.buttonViewCart()).click()
    }

    clickBackMobile(): void{
        cy.xpath(this.elementsMobile.buttonBack()).click()
    }

    clickFinishSaleMobile(): void{
        cy.xpath(this.elementsMobile.buttonFinishSale()).click()
    }

    assertFinishSaleDisabledMobile(): void{
        cy.xpath(this.elementsMobile.buttonFinishSale()).should('be.disabled')
    }

    assertItemExistMobile(item: string): void{
        cy.xpath(this.elementsMobile.contentItem(item)).should('exist')
    }

    assertItemNoExistMobile(item: string): void{
        cy.xpath(this.elementsMobile.contentItem(item)).should('not.exist')
    }

    assertCheckoutMobileDisabled(): void{
        cy.xpath(this.elementsMobile.buttonCheckout()).should('be.disabled')
    }
    
}
export default SaleSection