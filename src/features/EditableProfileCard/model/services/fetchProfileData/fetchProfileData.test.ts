import { fetchProfileData } from './fetchProfileData'
import { TestAsyncThunk } from '@/shared/config/tests/testAsyncThunk/testAsyncThunk'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'

const data = {
    username: 'TestUsername',
    firstname: 'TestFirstname',
    lastname: 'TestLastname',
    age: 33,
    country: Country.USA,
    city: 'Los Angeles',
    currency: Currency.USD
}

describe('fetchProfileData.test', () => {
    test('Return success', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData)
        thunk.api.get.mockReturnValue(Promise.resolve({ data }))
        const result = await thunk.callThunk('1')

        expect(thunk.api.get).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(data)
    })

    test('With 403 status code', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData)
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await thunk.callThunk('1')

        expect(result.meta.requestStatus).toBe('rejected')
    })
})
