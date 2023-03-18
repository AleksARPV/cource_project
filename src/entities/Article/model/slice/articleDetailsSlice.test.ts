import { type ArticleDetailsSchema } from 'entities/Article'
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice'
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById'

const data = {
    id: '1',
    title: 'Test title'
}

describe('articleDetailsSlice.test', () => {
    test('Test update profile service fulfilled', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true
        }

        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            fetchArticleById.fulfilled(data, '')
        )).toEqual({
            isLoading: false,
            data
        })
    })
})
