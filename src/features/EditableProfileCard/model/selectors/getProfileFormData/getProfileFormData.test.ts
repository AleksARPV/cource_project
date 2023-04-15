import { type StateSchema } from 'app/providers/StoreProvider'
import { getProfileFormData } from './getProfileFormData'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'

describe('getProfileFormData', () => {
    test('Should return FormData', () => {
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
                formData: data
            }
        }
        expect(getProfileFormData(state as StateSchema)).toEqual(data)
    })
    test('Should return undefined', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileFormData(state as StateSchema)).toEqual(undefined)
    })
})
