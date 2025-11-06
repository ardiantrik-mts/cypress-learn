import MainPOSPage from "../../../pages/POS/MainPOSPage"
import SaleSection from "../../../pages/POS/SaleSection"
import TransactionSection from "../../../pages/POS/TransactionSection"
import POSTab from "../../../pages/sidebar/POSTab"
import filterTests from "../../../support/filterTest"

filterTests(['web'], () => {
    describe('Verify Admin able to use the Sale section of POS feature (Existing Client)', () => {
        const posTab = new POSTab()
        const mainPage = new MainPOSPage()
        const saleSection = new SaleSection()
        const transactionSection = new TransactionSection()
        
        //constant
        const location = 'Cypress_location'
        const staff = 'Cypress Staff'
        const service = 'Cypress_service_POS'
        const product = 'Cypress_product_POS'
        const client = 'Cypress Client'

        beforeEach(() => {
            cy.adminSignIn();
            posTab.clickPOSTab();

            mainPage.clickCurrentLocation()
            mainPage.clickSelectedList(location)

            mainPage.clickOperator()
            mainPage.clickSelectedList(staff)

            mainPage.clickSaleTab()
            mainPage.clickClientType()
            mainPage.clickSelectedClientType('Client')
            mainPage.searchClient('Cypress')
            mainPage.clickSearchClient()
            mainPage.clickSelectedClient(client)
        })

        it('User failed to checkout any sale transaction without any products/services in POS page', () => {
            //Assert
            saleSection.assertCheckoutDisabled()
        })

        it('User failed to finish any sale transaction without choosing any payment method in POS page', () => {
            //Add Service to transaction
            saleSection.searchItem(service.substring(0,7))
            cy.wait(1000)
            saleSection.clickSelectedItem(service)
            saleSection.clickAddTransactions()

            //Add Product to transaction
            saleSection.searchItem(product.substring(0,7))
            cy.wait(1000)
            saleSection.clickSelectedItem(product)
            saleSection.clickAddTransactions()
            
            cy.wait(1000)
            saleSection.clickCheckout()

            //Assert
            saleSection.assertFinishSaleDisabled()
        })

        it('User successfully edit current sale transaction data live on table in POS page', () => {
            saleSection.clickIncreaseQtyInTable(product)
            saleSection.enterDiscountInTable(product, '40')
        })

        it('User successfully remove current sale transaction data from the table in POS page', () => {
            saleSection.clickRemoveItemInTable(product)
            saleSection.clickRemoveItemInTable(service)

            //Assert
            saleSection.assertCheckoutDisabled()
        })

        it('User successfully add a service/product to their favorite in POS page', () => {
            saleSection.searchItem(product.substring(0,7))
            cy.wait(1000)
            saleSection.clickSelectedItem(product)
            saleSection.clickFavourite()
            saleSection.clickClose()

            //Assert
            saleSection.clickFavouriteSection()
            cy.wait(1000)
            saleSection.assertItemExist(product)
        })

        it('User successfully add a sale transaction from their favorites in POS page', () => {
            saleSection.clickFavouriteSection()

            //Add Service to transaction
            saleSection.clickSelectedItem(product)
            saleSection.clickAddTransactions()

            cy.wait(1000)
            saleSection.clickCheckout()

            saleSection.clickPaymentMethod(1)
            saleSection.clickSelectedPaymentMethod("Cash")
            saleSection.enterPaymentAmount("11",1)
            saleSection.clickFinishSale()

            cy.wait(5000)
            const date = new Date()
            const timeFull = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
            const time = timeFull.split(" ")

            saleSection.clickCloseLoyalty()

            //Assert
            mainPage.clickTransactionTab()

            transactionSection.clickFilterDateFrom()
            transactionSection.clickTodayDate()
            transactionSection.clickFilterDateTo()
            transactionSection.clickTodayDate()

            transactionSection.assertInvoice(client, 'Client', 'Paid')
        })

        it('User successfully remove a service/product from their favorite in POS page', () => {
            saleSection.searchItem(product.substring(0,7))
            cy.wait(1000)
            saleSection.clickSelectedItem(product)
            saleSection.clickFavourite()
            saleSection.clickClose()

            //Assert
            saleSection.clickFavouriteSection()
            cy.wait(1000)
            saleSection.assertItemNoExist(product)
        })

        it('User successfully add a sale transaction (product(s) and service(s)) for an existing client from POS page', () => {
            //Add Service to transaction
            saleSection.searchItem(service.substring(0,4))
            cy.wait(1000)
            saleSection.clickSelectedItem(service)
            saleSection.clickAddTransactions()

            //Add Product to transaction
            saleSection.searchItem(product.substring(0,7))
            cy.wait(1000)
            saleSection.clickSelectedItem(product)
            saleSection.clickAddTransactions()
            
            cy.wait(1000)
            saleSection.clickCheckout()

            saleSection.clickPaymentMethod(1)
            saleSection.clickSelectedPaymentMethod("Cash")
            saleSection.enterPaymentAmount("33",1)

            saleSection.clickFinishSale()

            cy.wait(5000)
            const date = new Date()
            const timeFull = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
            const time = timeFull.split(" ")

            saleSection.clickCloseLoyalty()

            //Assert
            mainPage.clickTransactionTab()

            transactionSection.clickFilterDateFrom()
            transactionSection.clickTodayDate()
            transactionSection.clickFilterDateTo()
            transactionSection.clickTodayDate()

            transactionSection.assertInvoice(client, 'Client', 'Paid')
        })

        it('User successfully add a sale transaction (product(s) only) for an existing client from POS page', () => {
            //Add Product to transaction
            saleSection.searchItem(product.substring(0,7))
            cy.wait(1000)
            saleSection.clickSelectedItem(product)
            saleSection.clickAddTransactions()
            
            cy.wait(1000)
            saleSection.clickCheckout()

            saleSection.clickPaymentMethod(1)
            saleSection.clickSelectedPaymentMethod("Cash")
            saleSection.enterPaymentAmount("11",1)

            const date = new Date()
            const timeFull = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
            const time = timeFull.split(" ")

            saleSection.clickFinishSale()
            saleSection.clickCloseLoyalty()

            //Assert
            mainPage.clickTransactionTab()

            transactionSection.clickFilterDateFrom()
            transactionSection.clickTodayDate()
            transactionSection.clickFilterDateTo()
            transactionSection.clickTodayDate()

            cy.wait(1000)
            transactionSection.assertInvoice(client, 'Client', 'Paid')
        })

        it('User successfully add a sale transaction (service(s) only) for an existing client from POS page', () => {
            //Add Service to transaction
            saleSection.searchItem(service.substring(0,4))
            cy.wait(1000)
            saleSection.clickSelectedItem(service)
            saleSection.clickAddTransactions()
            
            cy.wait(1000)
            saleSection.clickCheckout()

            saleSection.clickPaymentMethod(1)
            saleSection.clickSelectedPaymentMethod("Cash")
            saleSection.enterPaymentAmount("22",1)
            saleSection.clickFinishSale()

            cy.wait(5000)
            const date = new Date()
            const timeFull = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
            const time = timeFull.split(" ")

            saleSection.clickCloseLoyalty()

            //Assert
            mainPage.clickTransactionTab()

            transactionSection.clickFilterDateFrom()
            transactionSection.clickTodayDate()
            transactionSection.clickFilterDateTo()
            transactionSection.clickTodayDate()

            transactionSection.assertInvoice(client, 'Client', 'Paid')
        })

        it('User successfully add a sale transaction (discount purchase) for an existing client from POS page', () => {
            //Add Service to transaction
            saleSection.searchItem(service.substring(0,4))
            cy.wait(1000)
            saleSection.clickSelectedItem(service)
            saleSection.enterDiscount("50")
            saleSection.clickAddTransactions()

            //Add Product to transaction
            saleSection.searchItem(product.substring(0,7))
            cy.wait(1000)
            saleSection.clickSelectedItem(product)
            saleSection.clickAddTransactions()
            
            cy.wait(1000)
            saleSection.clickCheckout()

            saleSection.clickPaymentMethod(1)
            saleSection.clickSelectedPaymentMethod("Cash")
            saleSection.enterPaymentAmount("22",1)

            const date = new Date()
            const timeFull = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
            const time = timeFull.split(" ")

            saleSection.clickFinishSale()
            saleSection.clickCloseLoyalty()

            //Assert
            mainPage.clickTransactionTab()

            transactionSection.clickFilterDateFrom()
            transactionSection.clickTodayDate()
            transactionSection.clickFilterDateTo()
            transactionSection.clickTodayDate()

            transactionSection.assertInvoice(client, 'Client', 'Paid')
        })
 
        it('User successfully add a sale transaction (partially paid) for an existing client from POS page', () => {
            //Add Service to transaction
            saleSection.searchItem(service.substring(0,4))
            cy.wait(1000)
            saleSection.clickSelectedItem(service)
            saleSection.clickAddTransactions()

            //Add Product to transaction
            saleSection.searchItem(product.substring(0,7))
            cy.wait(1000)
            saleSection.clickSelectedItem(product)
            saleSection.clickAddTransactions()
            
            cy.wait(1000)
            saleSection.clickCheckout()

            saleSection.clickPaymentMethod(1)
            saleSection.clickSelectedPaymentMethod("Cash")
            saleSection.enterPaymentAmount("20",1)
            saleSection.clickFinishSale()

            cy.wait(5000)
            const date = new Date()
            const timeFull = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
            const time = timeFull.split(" ")

            saleSection.clickCloseLoyalty()

            //Assert
            mainPage.clickTransactionTab()

            transactionSection.clickFilterDateFrom()
            transactionSection.clickTodayDate()
            transactionSection.clickFilterDateTo()
            transactionSection.clickTodayDate()
            transactionSection.clickFilterBy('Status')
            transactionSection.clickSelectedFilter('Partially Paid')

            transactionSection.assertInvoice(client, 'Client', 'Partially Paid')

            //Complete payment
            transactionSection.clickMakePayment(client)
            transactionSection.clickPaymentMethod(2)
            transactionSection.clickSelectedPaymentMethod('Cash')
            transactionSection.enterPaymentAmount('24', 2)
            transactionSection.clickFinishPayment()
            saleSection.clickCloseLoyalty()

            cy.wait(1000)
            transactionSection.clickFilterBy('Status')
            transactionSection.clickSelectedFilter('Paid')
            
            transactionSection.assertInvoice(client, 'Client', 'Paid')
        })

    })
})