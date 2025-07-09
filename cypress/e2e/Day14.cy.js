import Utils from '../support/utils'
const utls = new Utils()

/**
 * @author Zahin Ahad
*/

describe('Table', () => {
    
    before(() => {
    })
    
    beforeEach(() => {
        utls.clearAllStorage()
    })

    context('Table and its data', () => {

        it('Printing table data in cy log', () => {
            utls.visitPage('https://demo3x.opencartreports.com/admin/index.php?route=common/login')
            utls.typeText('#input-username', 'demo')
            utls.typePass('#input-password', 'demo')
            utls.clickButtonByLocator('.btn')
            utls.clickButtonByLocator(':nth-child(3) > .tile > .tile-footer > a')
            cy.get('#form-customer tr:nth-child(4) > td:nth-child(3)').should('have.text', 'test1@test.com')
            // printing all the data from the table
            cy.get("table[class='table table-bordered table-hover'] > tbody > tr").each((row) => {
                cy.wrap(row).within(() => {
                    cy.get('td').each((data) => {
                        utls.logMessage(data.text())
                    })
                })
            })
        })

        it.only('Pagination', () => {
            utls.visitPage('https://demo3x.opencartreports.com/admin/index.php?route=common/login')
            utls.typeText('#input-username', 'demo')
            utls.typePass('#input-password', 'demo')
            utls.clickButtonByLocator('.btn')
            utls.clickButtonByLocator(':nth-child(1) > .tile > .tile-footer > a')
            // printing all the data from the table
            cy.get("table[class='table table-bordered table-hover'] > tbody > tr").each((row) => {
                cy.wrap(row).within(() => {
                    cy.get('td').each((data) => {
                        utls.logMessage(data.text())
                    })
                })
            })
        })
    })
    
    after(() => {})
    
    afterEach(() => {})
})