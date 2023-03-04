import { type StateSchema } from 'app/providers/StoreProvider'
import { getLoginError } from 'features/AuthByUserName/model/selectors/getLoginError/getLoginError'

describe('getLoginError', () => {
    test('Should return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: 'Error'
            }
        }
        expect(getLoginError(state as StateSchema)).toEqual('Error')
    })
    test('Should return undefined', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginError(state as StateSchema)).toEqual(undefined)
    })
})
