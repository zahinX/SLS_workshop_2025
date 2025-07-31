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

    context('Login token', () => {

        it('Login token', () => {
            cy.request('POST', "https://rahulshettyacademy.com/api/ecom/auth/login",{"userEmail": "rounak.aftab@gmail.com", "userPassword":"Rounak@123"})
                .then( res => {
                    expect(res.status).to.eq(200)
                    Cypress.env(res.body.token)
                })
                
            utls.visitPage('https://www.rahulshettyacademy.com', {
                onBeforeLoad: (window) => {
                    window.localStorage.setItem('token', Cypress.env('token'))
                }
            })
        })
    })
    
    after(() => {})
    
    afterEach(() => {})
})