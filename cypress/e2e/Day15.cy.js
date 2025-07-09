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

    context('Handling new tabs', () => {

        it('New tab 1', () => {
            utls.visitPage('https://the-internet.herokuapp.com/windows')
            utls.clickButtonByLocator('.example > a') // opens new tab
            utls.getElement('.example > a').invoke('removeAttr', 'target').click() // removes attr and clicks
            utls.elementContainsText('h3', 'New Window')
        })

        it('New tab 2', () => {
            utls.visitPage('https://the-internet.herokuapp.com/windows')
            utls.clickButtonByLocator('.example > a') // opens new tab
            utls.getElement('.example > a').then((elem) => {
                let url = elem.prop('href')
                utls.visitPage(url)
            })
            utls.elementContainsText('h3', 'New Window')
        })

        it('New tab 3', () => {
            utls.visitPage('https://the-internet.herokuapp.com/windows')
            utls.clickButtonByLocator('.example > a') // opens new tab
            utls.getElement('.example > a').invoke('attr', 'target', '').click() // removes attr and clicks
            utls.elementContainsText('h3', 'New Window')
        })
    })

    context.only('Custom commands in Orange HRM', () => {

        it.skip('Login w/o custom command', () => {
            utls.visitPage('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            utls.typeText('[name="username"]', 'Admin')
            utls.typePass('[name="password"]', 'admin123')
            utls.clickButtonByLocator('[type="submit"]')
        })

        it('Login w custom command', () => {
            utls.visitPage('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            cy.loginOCRM('Admin', 'admin123')
        })
    })
    
    after(() => {})
    
    afterEach(() => {})
})