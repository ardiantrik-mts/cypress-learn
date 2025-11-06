class RefundSection{

    elementsRefundSection = {
        buttonTodayDate: (): string => '//nb-calendar-day-cell[@class="today day-cell ng-star-inserted"]',
        fieldFilterDateFrom: (): string => '//div[contains(@class, "tab-container")]/descendant::label[text()="From"]/parent::div/descendant::input',
        fieldFilterDateTo: (): string => '//div[contains(@class, "tab-container")]/descendant::label[text()="To"]/parent::div/descendant::input',
        fieldSearchInvoices: (): string => '//div[contains(@class, "tab-container")]/descendant::label[text()="Search Invoices"]/following-sibling::input',
        buttonShow: (): string => '//div[contains(@class, "tab-container")]/descendant::span[text()="Show"]/parent::button',
        headerInvoiceItem: (): string => '(//div[contains(@class, "tab-container")]/descendant::em[contains(@class, "ic-arrow-right")]/parent::div)[1]',
        buttonRefundPayment: (): string => '//div[contains(@class, "tab-container")]/descendant::span[text()="Refund Payment"]/parent::button',
        buttonCloseLoyaltyPopup: (): string => '//div[contains(@class, "ac-body")]/descendant::span[contains(text(), "Close")]/parent::button',
        buttonConfirmationYes: (): string => '//button[@class="app-btn-round-hover-primary"]//span[contains(text(),"Yes")]',
        buttonConfirmationNo: (): string => '//button[@class="app-btn-round-secondary"]/span[contains(text(),"No")]',
    }

    //Refund Section
    clickTodayDate(): void{
        cy.xpath(this.elementsRefundSection.buttonTodayDate()).click()
    }

    clickFilterDateFrom(): void{
        cy.xpath(this.elementsRefundSection.fieldFilterDateFrom()).click()
    }

    clickFilterDateTo(): void{
        cy.xpath(this.elementsRefundSection.fieldFilterDateTo()).click()
    }

    searchInvoices(item: string): void{
        cy.xpath(this.elementsRefundSection.fieldSearchInvoices()).type(item, {delay: 500})
    }

    clickShow(): void{
        cy.xpath(this.elementsRefundSection.buttonShow()).click()
    }

    clickInvoiceItem(): void{
        cy.xpath(this.elementsRefundSection.headerInvoiceItem()).click()
    }

    clickRefundPayment(): void{
        cy.xpath(this.elementsRefundSection.buttonRefundPayment()).click({force: true})
    }

    clickCloseLoyalty(): void{
        cy.xpath(this.elementsRefundSection.buttonCloseLoyaltyPopup()).click()
    }

    clickConfirmationYes(): void{
        cy.xpath(this.elementsRefundSection.buttonConfirmationYes()).click()
    }

    elementsTransactionRecap = {
        buttonPaymentMethod: (iteration: number): string => '(//label[text()="Payment Method"]/parent::div/descendant::nb-select/button)['+iteration+']',
        dropdownPaymentMethod: (paymentMethod: string): string => '//div[@class="cdk-overlay-container"]/descendant::nb-option[contains(text(), "'+paymentMethod+'")]',
        fieldPaymentAmount: (iteration: number): string => '(//div[contains(@class, "payment-input")]/descendant::input)['+iteration+']',
        buttonAddAnotherPaymentMethod: (): string => '//span[contains(text(), "Add another payment method")]/parent::button',
        buttonFinishRefund: (): string => '//div[contains(@class, "ac-body")]/descendant::span[contains(text(), "Finish Refund")]/parent::button',
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

    clickFinishRefund(): void{
        cy.xpath(this.elementsTransactionRecap.buttonFinishRefund()).click()
    }

    elementsMobile = {
        fieldFilterDateFrom: (): string => '//div[contains(@class, "mobile-section")]/descendant::label[text()="From"]/parent::div/descendant::input',
        fieldFilterDateTo: (): string => '//div[contains(@class, "mobile-section")]/descendant::label[text()="To"]/parent::div/descendant::input',
        fieldFilterBy: (): string => '//div[contains(@class, "mobile-section")]/descendant::label[text()="Filter by"]/following-sibling::nb-select',
        buttonShow: (): string => '//div[contains(@class, "mobile-section")]/descendant::span[text()="Show"]/parent::button',
        headerInvoiceItem: (): string => '(//div[contains(@class, "mobile-section")]/descendant::em[contains(@class, "ic-arrow-right")]/parent::div)[1]',
        buttonRefundPayment: (): string => '//div[contains(@class, "mobile-section")]/descendant::span[text()="Refund Payment"]/parent::button',
        buttonFinishRefund: (): string => '//div[contains(@class, "ac-footer")]/descendant::span[contains(text(), "Finish Refund")]/parent::button',
        buttonContinue: (): string => '//span[text()="Continue"]/parent::button',
    }

    // Mobile View Adjustment
    clickFilterDateFromMobile(): void{
        cy.xpath(this.elementsMobile.fieldFilterDateFrom()).click()
    }

    clickFilterDateToMobile(): void{
        cy.xpath(this.elementsMobile.fieldFilterDateTo()).click()
    }

    clickContinueMobile(): void{
        cy.xpath(this.elementsMobile.buttonContinue()).click()
    }

    clickShowMobile(): void{
        cy.xpath(this.elementsMobile.buttonShow()).click()
    }

    clickInvoiceItemMobile(): void{
        cy.xpath(this.elementsMobile.headerInvoiceItem()).click()
    }

    clickRefundPaymentMobile(): void{
        cy.xpath(this.elementsMobile.buttonRefundPayment()).click({force: true})
    }

    clickFinishRefundMobile(): void{
        cy.xpath(this.elementsMobile.buttonFinishRefund()).click()
    }
}
export default RefundSection