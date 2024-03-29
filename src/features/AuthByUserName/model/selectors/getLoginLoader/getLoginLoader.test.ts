import { type StateSchema } from '@/app/providers/StoreProvider'
import { getLoginLoader } from './getLoginLoader'

describe('getLoginLoader', () => {
    test('Should return loader', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true
            }
        }
        expect(getLoginLoader(state as StateSchema)).toEqual(true)
    })
    test('Should return error', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginLoader(state as StateSchema)).toEqual(false)
    })
})
