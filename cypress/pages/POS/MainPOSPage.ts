class MainPOSPage{

    elementsMainPage = {
        buttonCurrentLocation: (): string => '//label[contains(text(), "Location")]/following-sibling::nb-select/button',
        buttonOperator: (): string => '//label[contains(text(), "Operator")]/following-sibling::div/nb-select/button',
        buttonSectionTab: (section: string): string => '//li[contains(text(), "'+section+'")]',
        fieldClientType: (): string => '//label[contains(text(), "Select")]/following-sibling::div/nb-select/button',
        dropdownClientType: (clientType: string): string => '//div[@class="cdk-overlay-container"]/descendant::nb-option[text()=" '+clientType+' "]',
        fieldSearchClient: (): string => '//label[contains(text(), "Search Client")]/following-sibling::div/div/input[@type="text"]',
        dropdownContentList: (content: string): string => '//ul/nb-option[text()=" '+content+' "]',
        dropdownClientList: (client: string): string => '//ul/descendant::span[contains(text(), "'+client+'")]',
        buttonSearchClient: (): string => '//span[text()="Search"]/parent::button',
        buttonShowList: (): string => '//div[contains(@class, "tab-container")]/descendant::span[contains(text(), "Show List")]/ancestor::button',
        dropdownListTodaysBooking: (content: string): string => '//div[@class="cdk-overlay-container"]/descendant::li/a[contains(@title, "'+content+'")]',
    }

    //POS Main Page
    clickCurrentLocation(): void{
        cy.xpath(this.elementsMainPage.buttonCurrentLocation()).click()
    }

    clickOperator(): void{
        cy.xpath(this.elementsMainPage.buttonOperator()).click()
    }

    clickSelectedList(content: string): void{
        //All dropdown list are using same element for client, current location, and operator
        cy.xpath(this.elementsMainPage.dropdownContentList(content)).click()
    }

    clickSaleTab(): void{
        cy.xpath(this.elementsMainPage.buttonSectionTab("Sale")).click()
    }

    clickRefundTab(): void{
        cy.xpath(this.elementsMainPage.buttonSectionTab("Refund")).click()
    }

    clickTransactionTab(): void{
        cy.xpath(this.elementsMainPage.buttonSectionTab("Transaction")).click()
    }

    clickManageTab(): void{
        cy.xpath(this.elementsMainPage.buttonSectionTab("Manage")).click()
    }

    clickClientType(): void{
        cy.xpath(this.elementsMainPage.fieldClientType()).click()
    }

    clickSelectedClientType(clientType: string): void{
        cy.xpath(this.elementsMainPage.dropdownClientType(clientType)).click()
    }

    searchClient(client: string): void{
        cy.xpath(this.elementsMainPage.fieldSearchClient()).first().type('{selectall}'+client, {delay: 1000})
    }

    clickSearchClient(): void{
        cy.xpath(this.elementsMainPage.buttonSearchClient()).first().click()
    }

    clickSelectedClient(client: string): void{
        cy.xpath(this.elementsMainPage.dropdownClientList(client)).first().click({ force: true })
    }

    clickShowList(): void{
        cy.xpath(this.elementsMainPage.buttonShowList()).click()
    }

    clickSelectedTodaysBooking(content: string): void{
        cy.xpath(this.elementsMainPage.dropdownListTodaysBooking(content)).click()
    }

   
    elementsAddClientForm = {
        fieldFirstName: (): string => '//input[@id="firstName"]',
        fieldLastName: (): string => '//input[@id="surname"]',
        fieldEmail: (): string => '//input[@id="email"]',
        fieldMobile: (): string => '//input[@id="mobile"]',
        fieldDateOfBirth: (): string => '//input[@id="dob"]',
        buttonCancel: (): string => '//span[contains(text(),"Cancel")]/parent::button',
        buttonSaveChange: (): string => '//span[contains(text(),"Save")]/parent::button',
    }

    //Add Client Form
    enterFirstName(firstName: string): void{
        cy.xpath(this.elementsAddClientForm.fieldFirstName()).type(firstName)
    }

    enterLastName(lastName: string): void{
        cy.xpath(this.elementsAddClientForm.fieldLastName()).type(lastName)
    }

    enterEmail(email: string): void{
        cy.xpath(this.elementsAddClientForm.fieldEmail()).type(email)
    }

    enterMobile(mobile: string): void{
        cy.xpath(this.elementsAddClientForm.fieldMobile()).type(mobile)
    }

    enterDateOfBirth(dob: string): void{
        cy.xpath(this.elementsAddClientForm.fieldDateOfBirth()).type(dob)
    }

    clickCancel(): void{
        cy.xpath(this.elementsAddClientForm.buttonCancel()).click()
    }

    clickSaveChange(): void{
        cy.xpath(this.elementsAddClientForm.buttonSaveChange()).click()
    }


    elementsMobile = {
        buttonSectionTab: (section: string): string => '//p[text()="'+section+'"]/ancestor::div[contains(@class, "item")]',
        fieldSearchClient: (): string => '//div[contains(@class, "mobile-section")]/descendant::label[contains(text(), "Search Client")]/parent::div/descendant::input[@type="text"]',
        buttonSearchClient: (): string => '//div[contains(@class, "mobile-section")]/descendant::span[contains(text(), "Search")]/ancestor::button',
        buttonSelectedList: (content: string): string => '//p[text()="'+content+'"]/ancestor::div[contains(@class, "item")]',
        buttonSelectedClient: (client: string): string => '//div[contains(@class, "mobile-section")]/descendant::p[contains(text(), "'+client+'")]',
        buttonOperator: (): string => '//div[contains(@class, "mobile-section")]/descendant::label[contains(text(), "Operator")]/following-sibling::div/nb-select/button',
    }

    // Mobile View Adjustment
    clickSaleTabMobile(): void{
        cy.xpath(this.elementsMobile.buttonSectionTab("Sale")).click()
    }

    clickRefundTabMobile(): void{
        cy.xpath(this.elementsMobile.buttonSectionTab("Refund")).click()
    }

    clickTransactionTabMobile(): void{
        cy.xpath(this.elementsMobile.buttonSectionTab("Transaction List")).click()
    }

    clickManageTabMobile(): void{
        cy.xpath(this.elementsMobile.buttonSectionTab("Manage")).click()
    }

    clickClientTabMobile(): void{
        cy.xpath(this.elementsMobile.buttonSectionTab("Client")).click()
    }

    enterSearchClientMobile(client: string): void{
        cy.xpath(this.elementsMobile.fieldSearchClient()).type('{selectall}'+client, {delay: 500})
    }

    clickSearchClientMobile(): void{
        cy.xpath(this.elementsMobile.buttonSearchClient()).click()
    }

    clickSelectedListMobile(content: string): void{
        cy.xpath(this.elementsMobile.buttonSelectedList(content)).click()
    }

    clickSelectedClientMobile(client: string): void{
        cy.xpath(this.elementsMobile.buttonSelectedClient(client)).click()
    }

    clickOperatorMobile(): void{
        cy.xpath(this.elementsMobile.buttonOperator()).click()
    }
    
}
export default MainPOSPage