import { type StateSchema } from '@/app/providers/StoreProvider'
import { getProfileLoading } from './getProfileLoading'

describe('getProfileLoading', () => {
    test('Should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true
            }
        }
        expect(getProfileLoading(state as StateSchema)).toEqual(true)
    })
    test('Should return undefined', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileLoading(state as StateSchema)).toEqual(undefined)
    })
})
