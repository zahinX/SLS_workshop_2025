
import { wrap } from 'cypress/types/lodash'
import Utils from '../support/utils'
const u = new Utils()

/**
 * @author Zahin Ahad
*/

describe('Cypress Each', () => {
    
    before(() => {
        // login.clearAllStorage()
    })
    
    beforeEach(() => {})

    context(' verification', () => {

        it.skip('Verify clicking on last result', () => {
            u.visitPage('https://www.google.com')
        })

        it.skip('Verify something', () => {
            u.visitPage('https://tutorialsninja.com/demo/')
        })

        it('Verify something', () => {
            u.visitPage('https://automationtesting.co.uk/actions.html')
            cy.get('#doubClickStartText').trigger('dblclick').should('have.text', 'Well Done!')
            // cy.get('#doubClickStartText').trigger('dblclick').should('have.text', 'Well Done!').should('have.css', 'background-color: rgb(199, 255, 188)')
        })

        it('Verify something', () => {
            u.visitPage('https://swisnl.github.io/jQuery-contextMenu/demo.html')
            cy.get('.content-menu-one').trigger('contextmenu')
            cy.get('.content-menu-one').rightclick()
            cy.get(".context-menu-list > .context-menu-icon").should('be.visible')
            cy.get(".context-menu-list > .context-menu-icon").each((el) => {
                cy.wrap(el).should('be.visible').click()
                cy.wrap(el).rightclick()
            })
        })
    })
})

//.wM6W7d