import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'
import { getLoginLoader } from 'features/AuthByUserName/model/selectors/getLoginLoader/getLoginLoader'

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
