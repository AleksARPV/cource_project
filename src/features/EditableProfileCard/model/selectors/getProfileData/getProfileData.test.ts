import { type StateSchema } from '@/app/providers/StoreProvider'
import { getProfileData } from './getProfileData'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'

describe('getProfileData', () => {
    test('Should return data', () => {
        const data = {
            username: 'TestUsername',
            firstname: 'TestFirstname',
            lastname: 'TestLastname',
            age: 33,
            country: Country.USA,
            city: 'Los Angeles',
            currency: Currency.USD
        }

        const state: DeepPartial<StateSchema> = {
            profile: {
                data
            }
        }
        expect(getProfileData(state as StateSchema)).toEqual(data)
    })
    test('Should return undefined', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileData(state as StateSchema)).toEqual(undefined)
    })
})
