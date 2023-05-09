import { Article } from '../../../src/entities/Article'

const testArticle = {
    title: 'TESTING ARTICLE',
    subtitle: 'Что нового в экономике за 2022 год?',
    img: 'https://i.pinimg.com/originals/c7/a3/99/c7a399f79e674432b1390b21168f7eaa.jpg',
    views: 50422,
    createdAt: '26.02.2022',
    userId: '1',
    type: [
        'ECONOMICS'
    ],
    blocks: []
}

export const createArticle = (article?: Article) => {
    return cy.request({
        method: 'POST',
        url: 'http://localhost:8000/articles',
        headers: { Authorization: 'abc' },
        body: article ?? testArticle
    }).then(res => res.body)
}

export const removeArticle = (articleId: string) => {
    return cy.request({
        method: 'DELETE',
        url: 'http://localhost:8000/articles/' + articleId,
        headers: { Authorization: 'abc' }
    })
}

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        interface Chainable {
            // eslint-disable-next-line @typescript-eslint/method-signature-style
            createArticle(article?: Article): Chainable<Article>

            removeArticle(articleId: string): Chainable<void>
        }
    }
}
