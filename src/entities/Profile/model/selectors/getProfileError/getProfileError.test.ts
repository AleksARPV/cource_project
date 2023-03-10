import { type StateSchema } from 'app/providers/StoreProvider'
import { getProfileError } from './getProfileError'

describe('getProfileError', () => {
    test('Should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: 'test error'
            }
        }
        expect(getProfileError(state as StateSchema)).toEqual('test error')
    })
    test('Should return undefined', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileError(state as StateSchema)).toEqual(undefined)
    })
})
