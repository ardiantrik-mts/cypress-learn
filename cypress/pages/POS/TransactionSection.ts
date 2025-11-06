class TransactionSection{

    elementsTransactionSection = {
        buttonTodayDate: (): string => '//nb-calendar-day-cell[@class="today day-cell ng-star-inserted"]',
        fieldFilterDateFrom: (): string => '//div[contains(@class, "tab-container")]/descendant::label[text()="From"]/parent::div/descendant::input',
        fieldFilterDateTo: (): string => '//div[contains(@class, "tab-container")]/descendant::label[text()="To"]/parent::div/descendant::input',
        fieldFilterBy: (filter: string): string => '//div[contains(@class, "tab-container")]/descendant::label[text()="'+filter+'"]/parent::div/descendant::nb-select',
        optionFilterBy: (value: string): string => '//nb-option[text()="'+value+'"]',
        buttonShow: (): string => '//div[contains(@class, "tab-container")]/descendant::span[text()="Show"]/parent::button',
        fieldSearchInvoices: (): string => '//div[contains(@class, "tab-container")]/descendant::input[@placeholder="Search invoice"]',
        buttonShowDetails: (date: string): string => '//div[contains(@class, "tab-container")]/descendant::div[contains(text(), "'+date+'")]/following-sibling::div/descendant::span[contains(text(),"Show Details")]/parent::button',
        assertInvoice: (client: string, type: string, status: string): string => '//div[contains(text(), "'+client+'")]/following-sibling::div[contains(text(), "'+type+'")]/following-sibling::div[text()="'+status+'"]',
        buttonMakePayment: (client: string): string => '//div[contains(@class, "tab-container")]/descendant::div[contains(text(), "'+client+'")]/following-sibling::div/descendant::span[text()="Make Payment"]/parent::button',
        buttonCloseLoyaltyPopup: (): string => '//div[contains(@class, "ac-body")]/descendant::span[contains(text(), "Close")]/parent::button',
    }

    //Refund Section
    clickTodayDate(): void{
        cy.xpath(this.elementsTransactionSection.buttonTodayDate()).click()
    }

    clickFilterDateFrom(): void{
        cy.xpath(this.elementsTransactionSection.fieldFilterDateFrom()).click()
    }

    clickFilterDateTo(): void{
        cy.xpath(this.elementsTransactionSection.fieldFilterDateTo()).click()
    }

    searchInvoices(item: string): void{
        cy.xpath(this.elementsTransactionSection.fieldSearchInvoices()).type(item, {delay: 500})
    }

    clickShow(): void{
        cy.xpath(this.elementsTransactionSection.buttonShow()).click({force: true})
    }

    clickFilterBy(filter: string): void{
        cy.xpath(this.elementsTransactionSection.fieldFilterBy(filter)).click()
    }

    clickSelectedFilter(filter: string): void{
        cy.xpath(this.elementsTransactionSection.optionFilterBy(filter)).click()
    }

    clickMakePayment(client: string): void{
        cy.xpath(this.elementsTransactionSection.buttonMakePayment(client)).first().click({ force: true })
    }

    clickShowDetails(date: string): void{
        cy.xpath(this.elementsTransactionSection.buttonShowDetails(date)).click()
    }

    assertInvoice(client: string, type: string, status: string): void{
        cy.xpath(this.elementsTransactionSection.assertInvoice(client, type, status)).first().should('exist')
    }

    clickCloseLoyalty(): void{
        cy.xpath(this.elementsTransactionSection.buttonCloseLoyaltyPopup()).click()
    }

    elementsTransactionRecap = {
        buttonPaymentMethod: (iteration: number): string => '(//label[text()="Payment Method"]/parent::div[@class="payment-input"]/descendant::nb-select/button)['+iteration+']',
        dropdownPaymentMethod: (paymentMethod: string): string => '//div[@class="cdk-overlay-container"]/descendant::nb-option[contains(text(), "'+paymentMethod+'")]',
        fieldPaymentAmount: (iteration: number): string => '(//div[contains(@class, "payment-input")]/descendant::input)['+iteration+']',
        buttonAddAnotherPaymentMethod: (): string => '//span[contains(text(), "Add another payment method")]/parent::button',
        buttonFinishPayment: (): string => '//div[contains(@class, "ac-body")]/descendant::span[contains(text(), "Finish Payment")]/parent::button',
    }

    //Transaction Recap Modal
    clickPaymentMethod(iteration: number): void{
        cy.xpath(this.elementsTransactionRecap.buttonPaymentMethod(iteration)).click()
    }

    clickSelectedPaymentMethod(paymentMethod: string): void{
        cy.xpath(this.elementsTransactionRecap.dropdownPaymentMethod(paymentMethod)).click()
    }

    enterPaymentAmount(amount: string,iteration: number): void{
        cy.xpath(this.elementsTransactionRecap.fieldPaymentAmount(iteration)).type('{selectall}'+amount)
    }

    clickAddAnotherPaymentMethod(): void{
        cy.xpath(this.elementsTransactionRecap.buttonAddAnotherPaymentMethod()).click()
    }

    clickFinishPayment(): void{
        cy.xpath(this.elementsTransactionRecap.buttonFinishPayment()).click()
    }

    elementsMobile = {
        fieldFilterDateFrom: (): string => '//div[contains(@class, "mobile-section")]/descendant::label[text()="From"]/parent::div/descendant::input',
        fieldFilterDateTo: (): string => '//div[contains(@class, "mobile-section")]/descendant::label[text()="To"]/parent::div/descendant::input',
        fieldFilterBy: (): string => '//div[contains(@class, "mobile-section")]/descendant::label[text()="Filter by"]/following-sibling::nb-select',
        buttonShow: (): string => '//div[contains(@class, "mobile-section")]/descendant::span[text()="Show"]/parent::button',
        assertInvoiceMobile: (item: string, value: string): string => '//div[contains(@class, "mobile-section")]/descendant::p[text()="'+item+'"]/following-sibling::p[text()="'+value+'"]',
        dd: (): string => '',
    }

    // Mobile View Adjustment
    clickFilterDateFromMobile(): void{
        cy.xpath(this.elementsMobile.fieldFilterDateFrom()).click()
    }

    clickFilterDateToMobile(): void{
        cy.xpath(this.elementsMobile.fieldFilterDateTo()).click()
    }

    clickShowMobile(): void{
        cy.xpath(this.elementsMobile.buttonShow()).click()
    }

    assertInvoiceMobile(item: string, value: string): void{
        cy.xpath(this.elementsMobile.assertInvoiceMobile(item, value)).first().should('exist')
    }
    
}
export default TransactionSection