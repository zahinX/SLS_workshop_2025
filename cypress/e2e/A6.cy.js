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

        it('Table operations', () => {
            utls.visitPage('https://automationtesting.co.uk/tables.html')
            cy.get('thead tr th').should('have.length', 6) // column
            cy.get('table tr').should('have.length', 8) // row
            cy.get('tr:nth-child(7) > td:nth-child(5)').should('have.text', 'Japan') // check specific value
            // printing all the data from the table (log)
            cy.get("table > tbody > tr").each((row) => {
                cy.wrap(row).within(() => {
                    cy.get('td').each((data) => {
                        utls.logMessage(data.text())
                    })
                })
            })
        })
    
    after(() => {})
    
    afterEach(() => {})
    })
})