import Utils from '../support/utils'
const utls = new Utils()

/**
 * @author Zahin Ahad
*/

describe('Auth', () => {
    
    before(() => {
    })
    
    beforeEach(() => {
        utls.clearAllStorage()
    })

    context('Auth', () => {

        it.skip('Authenticated Prompt', () => {
            utls.visitPage('https://admin:admin@the-internet.herokuapp.com/javascript_alerts')
            // utls.visitPage('https://the-internet.herokuapp.com/javascript_alerts', {auth : {
            //     username: 'admin',
            //     password: 'admin'
            // }})
        })

        it.skip('Base URL visit', () => {
            utls.visitPage('/')
        })

        it('Login', () => {
            utls.visitPage('https://demo3x.opencartreports.com/admin/index.php?route=common/login')
            utls.typeText('#input-username', 'demo')
            utls.typePass('#input-password', 'demo')
            utls.clickButtonByLocator('.btn')
            utls.clickButtonByLocator(':nth-child(3) > .tile > .tile-footer > a')
            cy.get('thead > tr > td').should('have.length', 10)
        })
    
    after(() => {})
    
    afterEach(() => {})
    })
})