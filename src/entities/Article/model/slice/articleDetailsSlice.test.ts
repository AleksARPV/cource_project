import { type ArticleDetailsSchema } from '../types/articleDetailsSchema'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'

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
