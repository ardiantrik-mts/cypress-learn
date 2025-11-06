class ManageSection{

    elementsCashRegister = {
        textCashRegisterBalance: (): string => '//div[contains(@class, "tab-container")]/descendant::div[contains(@class, "balance")]/descendant::div[contains(@class, "cash-drawer")]/p',
        textPaymentTypeValues: (paymentType: string): string => '//div[contains(@class, "tab-container")]/descendant::div[contains(@class, "payment-type-report")]/descendant::p[text()="'+paymentType+'"]/following-sibling::p',
        textRecentPaymentTypeReport: (): string => '//div[contains(@class, "tab-container")]/descendant::p[text()="Payment Type Report"]/following-sibling::p',
        buttonBalanceRegister: (): string => '//div[contains(@class, "tab-container")]/descendant::div[contains(@class, "balance")]/descendant::span[text()="Balance Register"]/parent::button',
        buttonShowReport: (): string => '//div[contains(@class, "tab-container")]/descendant::div[contains(@class, "balance")]/descendant::a[text()="Show CRB Report"]',
        buttonYes: (): string => '//span[text()="Yes"]/parent::button',
    }

    //Cash Register Section
    clickBalanceRegister(): void{
        cy.xpath(this.elementsCashRegister.buttonBalanceRegister()).click()
    }

    clickShowReport(): void{
        cy.xpath(this.elementsCashRegister.buttonShowReport()).click()
    }

    clickConfirmationYes(): void{
        cy.xpath(this.elementsCashRegister.buttonYes()).click()
    }

    assertPaymentTypeValues(paymentType: string, balance: string): void{
        cy.xpath(this.elementsCashRegister.textPaymentTypeValues(paymentType)).should('contain', '$'+balance)
    }

    assertCashRegisterBalance(balance: string): void{
        cy.xpath(this.elementsCashRegister.textCashRegisterBalance()).should('contain', '$'+balance)
    }

    assertPaymentTypeReport(date: string, time: string): void{
        cy.xpath(this.elementsCashRegister.textRecentPaymentTypeReport()).should('contain', 'Values from '+date+' '+time)
    }

    elemetsCashMovement = {
        fieldTransactionType: (): string => '//div[contains(@class, "tab-container")]/descendant::label[text()="Transaction Type"]/following-sibling::nb-select',
        fieldReason: (): string => '//div[contains(@class, "tab-container")]/descendant::label[text()="Reason"]/following-sibling::nb-select',
        fieldAmount: (): string => '//div[contains(@class, "tab-container")]/descendant::label[text()="Enter Amount"]/following-sibling::app-money-input/descendant::input',
        fieldComments: (): string => '//div[contains(@class, "tab-container")]/descendant::label[text()="Comments"]/following-sibling::textarea',
        buttonCreate: (): string => '//div[contains(@class, "tab-container")]/descendant::span[text()="Create"]/parent::button',
        selectedDropdownContent: (content: string): string => '//ul[@class="option-list"]/nb-option[contains(text(), "'+content+'")]',
    }

    //Cash Movement Section
    clickTransactionType(): void{
        cy.xpath(this.elemetsCashMovement.fieldTransactionType()).click()
    }

    clickReason(): void{
        cy.xpath(this.elemetsCashMovement.fieldReason()).click()
    }

    clickSelectedContent(content: string): void{
        cy.xpath(this.elemetsCashMovement.selectedDropdownContent(content)).click()
    }

    enterAmount(amount: string): void{
        cy.xpath(this.elemetsCashMovement.fieldAmount()).type('{selectall}'+amount, {delay: 500})
    }

    enterComments(comments: string): void{
        cy.xpath(this.elemetsCashMovement.fieldComments()).type('{selectall}'+comments)
    }

    clickCreate(): void{
        cy.xpath(this.elemetsCashMovement.buttonCreate()).click()
    }
    
    elementsEODBalanceRegister = {
        buttonCancelEOD: (): string => '//div[contains(@class, "balance-register-table-container")]/descendant::span[text()="Cancel End-of-Day"]/parent::button',
        buttonNext: (): string => '//span[text()="Next"]/parent::button',
        buttonCancel: (): string => '//div[contains(@class, "manage-sidemodal")]/descendant::span[text()="Cancel"]/parent::button',
        buttonSave: (): string => '//span[text()="Save"]/parent::button',
        buttonYes: (): string => '//span[text()="Yes"]/parent::button',
        buttonCloseSession: (): string => '//span[text()="Close Session"]/parent::button',
        buttonPaymentAmount: (paymentType: string): string => '(//div[text()="'+paymentType+'"]/following-sibling::div/descendant::span/parent::button)[1]',
        buttonComments: (paymentType: string): string => '(//div[text()="'+paymentType+'"]/following-sibling::div/descendant::span/parent::button)[2]',
        fieldNextSessionFloat: (): string => '//label[text()="Next Session Float"]/following-sibling::app-money-input/descendant::input',
        fieldCashToDeposit: (): string => '//label[text()="Cash to Deposit"]/following-sibling::app-money-input/descendant::input',
        fieldCashAmount: (): string => '//label[text()="Cash Amount"]/following-sibling::app-money-input/descendant::input',
    }

    //EOD Balance Register Section
    clickPaymentAmount(paymentType: string): void{
        cy.xpath(this.elementsEODBalanceRegister.buttonPaymentAmount(paymentType)).click()
    }

    clickSaveAmount(): void{
        cy.xpath(this.elementsEODBalanceRegister.buttonSave()).click({ force: true })
    }

    clickNext(): void{
        cy.xpath(this.elementsEODBalanceRegister.buttonNext()).click()
    }

    clickCloseSession(): void{
        cy.xpath(this.elementsEODBalanceRegister.buttonCloseSession()).click()
    }

    clickYes(): void{
        cy.xpath(this.elementsEODBalanceRegister.buttonYes()).click({ force: true })
    }

    enterNextSessionFloat(amount: string): void{
        cy.xpath(this.elementsEODBalanceRegister.fieldNextSessionFloat()).type('{selectall}'+amount)
    }

    enterCashToDeposit(amount: string): void{
        cy.xpath(this.elementsEODBalanceRegister.fieldCashToDeposit()).type('{selectall}'+amount)
    }

    enterCashAmount(amount: string): void{
        cy.xpath(this.elementsEODBalanceRegister.fieldCashAmount()).first().type('{selectall}'+amount)
    }

    elementsCashRegisterReport = {
        fieldFilterDateFrom: (): string => '//div[contains(@class, "tab-container")]/descendant::label[text()="From Date"]/parent::div/descendant::input',
        fieldFilterDateTo: (): string => '//div[contains(@class, "tab-container")]/descendant::label[text()="To Date"]/parent::div/descendant::input',
        buttonTodayDate: (): string => '//nb-calendar-day-cell[@class="today day-cell ng-star-inserted"]',
        buttonShow: (): string => '//div[contains(@class, "tab-container")]/descendant::span[text()="Show"]/parent::button',
        buttonBack: (): string => '//div[contains(@class, "tab-container")]/descendant::span[text()="Back to CRB"]/parent::button',
    }
    
    //Cash Register Report Section
    clickTodayDate(): void{
        cy.xpath(this.elementsCashRegisterReport.buttonTodayDate()).click()
    }

    clickFilterDateFrom(): void{
        cy.xpath(this.elementsCashRegisterReport.fieldFilterDateFrom()).click()
    }

    clickFilterDateTo(): void{
        cy.xpath(this.elementsCashRegisterReport.fieldFilterDateTo()).click()
    }

    clickShow(): void{
        cy.xpath(this.elementsCashRegisterReport.buttonShow()).click()
    }

    elementsMobile = {
        //Cash Register
        textCashRegisterBalance: (): string => '//div[contains(@class, "mobile-section")]/descendant::div[contains(@class, "cash-drawer")]/p',
        textPaymentTypeValues: (paymentType: string): string => '//div[contains(@class, "mobile-section")]/descendant::div[contains(@class, "payment-type-report")]/descendant::p[text()="'+paymentType+'"]/following-sibling::p',
        textRecentPaymentTypeReport: (): string => '//div[contains(@class, "mobile-section")]/descendant::p[text()="Payment Type Report"]/following-sibling::p',
        buttonBalanceRegister: (): string => '//div[contains(@class, "mobile-section")]/descendant::div[contains(@class, "app-block-sm")]/descendant::span[text()="Balance Register"]/parent::button',
        buttonShowReport: (): string => '//div[contains(@class, "mobile-section")]/descendant::div[contains(@class, "app-block-sm")]/descendant::a[text()="Show CRB Report"]',
        //Cash Movement
        fieldTransactionType: (): string => '//div[contains(@class, "mobile-section")]/descendant::label[text()="Transaction Type"]/following-sibling::nb-select',
        fieldReason: (): string => '//div[contains(@class, "mobile-section")]/descendant::label[text()="Reason"]/following-sibling::nb-select',
        fieldAmount: (): string => '//div[contains(@class, "mobile-section")]/descendant::label[text()="Enter Amount"]/following-sibling::app-money-input/descendant::input',
        fieldComments: (): string => '//div[contains(@class, "mobile-section")]/descendant::label[text()="Comments"]/following-sibling::textarea',
        buttonCreate: (): string => '//div[contains(@class, "mobile-section")]/descendant::span[text()="Create"]/parent::button',
        //Balance Register
        buttonPaymentAmount: (paymentType: string): string => '//div[contains(@class, "mobile-section")]/descendant::p[text()="'+paymentType+'"]/parent::div/following-sibling::div/descendant::p[text()="Actual Totals"]/following-sibling::p/button',
        fieldCashAmount: (): string => '//div[contains(@class, "mobile-section")]/descendant::label[text()="Cash Amount"]/following-sibling::app-money-input/descendant::input',
        buttonSave: (): string => '//div[contains(@class, "mobile-section")]/descendant::span[text()="Save"]/parent::button',
        buttonNext: (): string => '//div[contains(@class, "mobile-section")]/descendant::span[text()="Next"]/parent::button',
        buttonCloseSession: (): string => '//div[contains(@class, "mobile-section")]/descendant::span[text()="Close Session"]/parent::button',
        fieldNextSessionFloat: (): string => '//div[contains(@class, "mobile-section")]/descendant::label[text()="Next Session Float"]/following-sibling::app-money-input/descendant::input',
        fieldCashToDeposit: (): string => '//div[contains(@class, "mobile-section")]/descendant::label[text()="Cash to Deposit"]/following-sibling::app-money-input/descendant::input',
        buttonYes: (): string => '//div[contains(@class, "mobile-section")]/descendant::span[text()="Yes"]/parent::button',
        //Cash Register Report
        fieldFilterDateFrom: (): string => '//div[contains(@class, "mobile-section")]/descendant::label[text()="From Date"]/parent::div/descendant::input',
        fieldFilterDateTo: (): string => '//div[contains(@class, "mobile-section")]/descendant::label[text()="To Date"]/parent::div/descendant::input',
        buttonShow: (): string => '//div[contains(@class, "mobile-section")]/descendant::span[text()="Show"]/parent::button',
        buttonBack: (): string => '//div[contains(@class, "mobile-section")]/descendant::span[text()="Back to CRB"]/parent::button',
    }

    //Cash Register Section Mobile
    clickPaymentAmountMobile(paymentType: string): void{
        cy.xpath(this.elementsMobile.buttonPaymentAmount(paymentType)).click()
    }

    enterCashAmountMobile(amount: string): void{
        cy.xpath(this.elementsMobile.fieldCashAmount()).first().type('{selectall}'+amount)
    }

    clickSaveAmountMobile(): void{
        cy.xpath(this.elementsMobile.buttonSave()).click({ force: true })
    }

    clickBalanceRegisterMobile(): void{
        cy.xpath(this.elementsMobile.buttonBalanceRegister()).click()
    }

    clickShowReportMobile(): void{
        cy.xpath(this.elementsMobile.buttonShowReport()).click()
    }

    assertPaymentTypeValuesMobile(paymentType: string, balance: string): void{
        cy.xpath(this.elementsMobile.textPaymentTypeValues(paymentType)).should('contain', '$'+balance)
    }

    assertCashRegisterBalanceMobile(balance: string): void{
        cy.xpath(this.elementsMobile.textCashRegisterBalance()).should('contain', '$'+balance)
    }

    assertPaymentTypeReportMobile(date: string, time: string): void{
        cy.xpath(this.elementsMobile.textRecentPaymentTypeReport()).should('contain', 'Values from '+date+' '+time)
    }

    //Cash Movement Mobile Section
    clickTransactionTypeMobile(): void{
        cy.xpath(this.elementsMobile.fieldTransactionType()).click()
    }

    clickReasonMobile(): void{
        cy.xpath(this.elementsMobile.fieldReason()).click()
    }

    enterAmountMobile(amount: string): void{
        cy.xpath(this.elementsMobile.fieldAmount()).type('{selectall}'+amount, {delay: 500})
    }

    enterCommentsMobile(comments: string): void{
        cy.xpath(this.elementsMobile.fieldComments()).type('{selectall}'+comments)
    }

    clickCreateMobile(): void{
        cy.xpath(this.elementsMobile.buttonCreate()).click({force: true})
    }

    //EOD Balance Register Section Mobile
    clickNextMobile(): void{
        cy.xpath(this.elementsMobile.buttonNext()).click({force: true})
    }

    clickCloseSessionMobile(): void{
        cy.xpath(this.elementsMobile.buttonCloseSession()).click({force: true})
    }

    clickYesMobile(): void{
        cy.xpath(this.elementsMobile.buttonYes()).click({force: true})
    }

    enterNextSessionFloatMobile(amount: string): void{
        cy.xpath(this.elementsMobile.fieldNextSessionFloat()).type('{selectall}'+amount)
    }

    enterCashToDepositMobile(amount: string): void{
        cy.xpath(this.elementsMobile.fieldCashToDeposit()).type('{selectall}'+amount)
    }

    //Cash Register Report Section Mobile
    clickFilterDateFromMobile(): void{
        cy.xpath(this.elementsMobile.fieldFilterDateFrom()).click()
    }

    clickFilterDateToMobile(): void{
        cy.xpath(this.elementsMobile.fieldFilterDateTo()).click()
    }

    clickShowMobile(): void{
        cy.xpath(this.elementsMobile.buttonShow()).click({force: true})
    }
}
export default ManageSection