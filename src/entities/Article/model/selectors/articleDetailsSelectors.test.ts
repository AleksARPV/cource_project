import { type StateSchema } from 'app/providers/StoreProvider'
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading
} from 'entities/Article/model/selectors/articleDetailsSelectors'

const data = {
    id: '1',
    title: 'Test title'
}

describe('articleDetailsSelectors', () => {
    test('Should return data', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data
            }
        }
        expect(getArticleDetailsData(state as StateSchema)).toEqual(data)
    })
    test('Should return undefined', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined)
    })
    test('Should return loading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true
            }
        }
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true)
    })
    test('Should work with empty state isLoading', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(undefined)
    })
    test('Should return error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error: 'error'
            }
        }
        expect(getArticleDetailsError(state as StateSchema)).toBe('error')
    })
    test('Should work with empty state error', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined)
    })
})
