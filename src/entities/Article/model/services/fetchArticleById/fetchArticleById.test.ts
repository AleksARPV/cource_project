import { TestAsyncThunk } from '@/shared/config/tests/testAsyncThunk/testAsyncThunk'
import { fetchArticleById } from './fetchArticleById'

describe('fetchArticleById.test', () => {
    test('Return success', async () => {
        const data = {
            id: '1',
            title: 'Test title'
        }
        const thunk = new TestAsyncThunk(fetchArticleById)
        thunk.api.get.mockReturnValue(Promise.resolve({ data }))
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const result = await thunk.callThunk({ id: '1', title: 'Test title' })

        expect(thunk.api.get).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(data)
    })

    test('With 403 status code', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById)
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const result = await thunk.callThunk({ id: '1', title: 'Test title' })

        expect(result.meta.requestStatus).toBe('rejected')
    })
})
