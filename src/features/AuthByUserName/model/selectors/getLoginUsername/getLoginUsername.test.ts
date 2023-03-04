import { type StateSchema } from 'app/providers/StoreProvider'
import { getLoginUsername } from 'features/AuthByUserName/model/selectors/getLoginUsername/getLoginUsername'

describe('getLoginUsername', () => {
    test('Should return username', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'username'
            }
        }
        expect(getLoginUsername(state as StateSchema)).toEqual('username')
    })
    test('Should return empty string', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginUsername(state as StateSchema)).toEqual('')
    })
})
