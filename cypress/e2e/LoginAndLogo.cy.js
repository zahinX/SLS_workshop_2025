import Login from '../support/POM/login'
import Logo from '../support/POM/logo'
import Utils from '../support/utils'
const login = new Login()
const logo = new Logo()
const utls = new Utils()

/**
 * @author Zahin Ahad
*/

describe('Sample', () => {
    
    before(() => {
        login.clearAllStorage()
        login.visitLoginPage()
    })
    
    beforeEach(() => {})

    context('Login and logo verification', () => {

        it('Verify login', () => {
            login.typeEmail()
            // login.typePass()
            utls.typePass(`#inputPassword`, `${Cypress.env('adminPass')}`)
            login.clickLoginBtn()
            login.verifyUrl()
        })
    
        it('Verify logo', () => {
            logo.verifyLogoVisibility()
        })
    })

    // context('Test Block 2', () => {

    //     it('Test Case 3', () => {})

    //     it('Test Case 4', () => {})
    // })
    
    after(() => {})
    
    afterEach(() => {})
})