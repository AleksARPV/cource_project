import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { validateProfileData } from './validateProfileData'
import { ValidateProfileError } from '../../consts/constsEditableProfileCard'

const data = {
    username: 'TestUsername',
    firstname: 'TestFirstname',
    lastname: 'TestLastname',
    age: 33,
    country: Country.USA,
    city: 'Los Angeles',
    currency: Currency.USD
}

describe('validateProfileData.test', () => {
    test('Return empty validateProfileData', async () => {
        const result = validateProfileData(data)

        expect(result).toEqual([])
    })

    test('ValidateProfileData - without firstname and lastname', async () => {
        const result = validateProfileData({ ...data, firstname: '', lastname: '' })

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
    })

    test('ValidateProfileData - without age', async () => {
        const result = validateProfileData({ ...data, age: undefined })

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE])
    })

    test('ValidateProfileData - without country', async () => {
        const result = validateProfileData({ ...data, country: undefined })

        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY])
    })

    test('ValidateProfileData - without data', async () => {
        const result = validateProfileData({})

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY
        ])
    })
})
