import axios from 'axios'
import { loginByUsername } from 'features/AuthByUserName/services/loginByUsername/loginByUsername'
import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/config/tests/testAsyncThunk/testAsyncThunk'

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)
describe('loginByUsername.test', () => {
    // let dispatch: Dispatch
    // let getState: () => StateSchema
    //
    // beforeEach(() => {
    //     dispatch = jest.fn()
    //     getState = jest.fn()
    // })
    //
    // test('Return userValue', async () => {
    //     const userValue = { username: 'user', id: '1' }
    //
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }))
    //
    //     const action = loginByUsername({ username: 'user', password: '123' })
    //
    //     const result = await action(dispatch, getState, undefined)
    //
    //     expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
    //     expect(dispatch).toHaveBeenCalledTimes(3)
    //     expect(mockedAxios.post).toHaveBeenCalled()
    //     expect(result.meta.requestStatus).toBe('fulfilled')
    //     expect(result.payload).toEqual(userValue)
    // })
    //
    // test('With 403 status code', async () => {
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))
    //
    //     const action = loginByUsername({ username: 'user', password: '123' })
    //
    //     const result = await action(dispatch, getState, undefined)
    //
    //     expect(dispatch).toHaveBeenCalledTimes(2)
    //     expect(mockedAxios.post).toHaveBeenCalled()
    //     expect(result.meta.requestStatus).toBe('rejected')
    //     expect(result.payload).toEqual('ERROR')
    // })

    test('Return userValue', async () => {
        const userValue = { username: 'user', id: '1' }

        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }))

        const thunk = new TestAsyncThunk(loginByUsername)
        const result = await thunk.callThunk({ username: 'user', password: '123' })

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
        expect(thunk.dispatch).toHaveBeenCalledTimes(3)
        expect(mockedAxios.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(userValue)
    })

    test('With 403 status code', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))

        const thunk = new TestAsyncThunk(loginByUsername)
        const result = await thunk.callThunk({ username: 'user', password: '123' })

        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect(mockedAxios.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual('ERROR')
    })
})
