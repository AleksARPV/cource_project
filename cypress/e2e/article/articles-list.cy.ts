describe('User goes to the articles list page', () => {
    beforeEach(() => {
        cy.login().then(data => {
            cy.visit('articles')
        })
    })
    it('Articles successfully uploaded', () => {
        cy.getByTestId('ArticleList').should('exist')
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3)
    })
    it('Using fixtures (stabs)', () => {
        cy.intercept('GET', '**/articles?*', { fixture: 'articles.json' })
        cy.getByTestId('ArticleList').should('exist')
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3)
    })
    it.skip('Example of skipped test', () => {
        cy.getByTestId('ArticleList').should('exist')
        cy.getByTestId('NeverExsistingComponent').should('have.length.greaterThan', 3)
    })
})

export {}
