import { updateProfileData } from './updateProfileData'
import { TestAsyncThunk } from '@/shared/config/tests/testAsyncThunk/testAsyncThunk'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
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

describe('updateProfileData.test', () => {
    test('Return success', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                formData: data
            }
        })
        thunk.api.put.mockReturnValue(Promise.resolve({ data }))
        const result = await thunk.callThunk()

        expect(thunk.api.put).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(data)
    })

    test('With 403 status code', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                formData: data
            }
        })
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await thunk.callThunk()

        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR])
    })

    test('With incorrect firstname', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                formData: { ...data, firstname: '' }
            }
        })
        const result = await thunk.callThunk()

        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
    })
})
