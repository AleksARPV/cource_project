let currentArticleId = ''

describe('User goes to the article details page', () => {
    beforeEach(() => {
        cy.login()
        cy.createArticle().then(article => {
            currentArticleId = article.id
            cy.visit(`articles/${article.id}`)
        })
    })
    afterEach(() => {
        cy.removeArticle(currentArticleId)
    })
    it('User sees article details', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist')
    })
    it('User sees article details', () => {
        cy.getByTestId('ArticleRecommendationsList').should('exist')
    })
    it('User sends comments', () => {
        cy.getByTestId('ArticleDetails.Info')
        cy.getByTestId('AddCommentForm').scrollIntoView()
        cy.addComment('Test case text')
        cy.getByTestId('CommentCard.Content').should('have.length', 1)
    })
    it('User rates the article', () => {
        cy.getByTestId('ArticleDetails.Info')
        cy.getByTestId('RatingCard').scrollIntoView()
        cy.setRate(4, 'feedback')
        cy.get('[data-selected=true]').should('have.length', 4)
    })
    it('User rates the article (using fixtures/stabs)', () => {
        cy.intercept('GET', '**/articles/*', { fixture: 'article-details.json' })
        cy.getByTestId('ArticleDetails.Info')
        cy.getByTestId('RatingCard').scrollIntoView()
        cy.setRate(4, 'feedback')
        cy.get('[data-selected=true]').should('have.length', 4)
    })
})

export {}
