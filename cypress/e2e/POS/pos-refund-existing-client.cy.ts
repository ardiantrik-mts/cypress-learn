import MainPOSPage from "../../../pages/POS/MainPOSPage"
import RefundSection from "../../../pages/POS/RefundSection"
import TransactionSection from "../../../pages/POS/TransactionSection"
import POSTab from "../../../pages/sidebar/POSTab"
import filterTests from "../../../support/filterTest"

filterTests(['web'], () => {
    describe('Verify Admin able to use the Refund section of POS feature', () => {
        const posTab = new POSTab()
        const mainPage = new MainPOSPage()
        const refundSection = new RefundSection()
        const transactionSection = new TransactionSection()
        
        //constant
        const location = 'Cypress_location'
        const staff = 'Cypress Staff'
        const service = 'Cypress_service_POS'
        const product = 'Cypress_product_POS'
        const client = 'Cypress Client'

        beforeEach(() => {
            cy.addSaleTransaction('Client');

            cy.adminSignIn();
            posTab.clickPOSTab();

            mainPage.clickCurrentLocation()
            mainPage.clickSelectedList(location)

            mainPage.clickRefundTab()
            mainPage.clickClientType()
            mainPage.clickSelectedClientType('Client')
            mainPage.searchClient(client.substring(0,7))
            mainPage.clickSearchClient()
            mainPage.clickSelectedList(client)
        })

        it('User successfully refund a sale transaction (product(s) and service(s)) for an existing client from POS page', () => {
            // refundSection.clickFilterDateFrom()
            // refundSection.clickTodayDate()

            refundSection.clickFilterDateTo()
            refundSection.clickTodayDate()

            refundSection.clickShow()
            cy.wait(1000)
            refundSection.clickInvoiceItem()

            refundSection.clickRefundPayment()

            refundSection.clickConfirmationYes()

            refundSection.clickPaymentMethod(1)
            refundSection.clickSelectedPaymentMethod("Cash")
            // refundSection.enterPaymentAmount("33", 1)
            refundSection.clickFinishRefund()

            refundSection.clickCloseLoyalty()

            //Assert
            mainPage.clickTransactionTab()
            mainPage.clickCurrentLocation()
            mainPage.clickSelectedList(location)

            transactionSection.clickFilterDateFrom()
            transactionSection.clickTodayDate()
            transactionSection.clickFilterDateTo()
            transactionSection.clickTodayDate()
            transactionSection.clickFilterBy('Invoice Type')
            transactionSection.clickSelectedFilter('Refund')

            transactionSection.assertInvoice(client, 'Client', 'Paid')
        })

    })
})