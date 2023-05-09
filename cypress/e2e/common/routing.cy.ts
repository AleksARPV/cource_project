import { selectByTestId } from '../../helpers/selectByTestId'

describe('Routing', () => {
    describe('User NOT authorized', () => {
        it('Routing to the Main page', () => {
            cy.visit('/')
            cy.get(selectByTestId('MainPage')).should('exist')
        })
        it('Routing open the Profile page', () => {
            cy.visit('/profile/1')
            cy.get(selectByTestId('MainPage')).should('exist')
        })
        it('Never existing route', () => {
            cy.visit('/neverexistingpage')
            cy.get(selectByTestId('NotFoundPage')).should('exist')
        })
    })
    describe('User authorized', () => {
        beforeEach(() => {
            cy.login()
        })
        it('Routing open the Profile page', () => {
            cy.visit('/profile/1')
            cy.get(selectByTestId('ProfilePage')).should('exist')
        })
        it('Routing to the Articles page', () => {
            cy.visit('/articles')
            cy.get(selectByTestId('ArticlesPage')).should('exist')
        })
    })
})
