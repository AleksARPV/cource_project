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
})
