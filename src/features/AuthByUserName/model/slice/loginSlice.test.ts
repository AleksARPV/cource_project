import { type DeepPartial } from '@reduxjs/toolkit'
import { type LoginSchema } from 'features/AuthByUserName'
import { loginActions, loginReducer } from 'features/AuthByUserName/model/slice/loginSlice'

describe('loginSlice.test', () => {
    test('Test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: 'user' }
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUsername('user123')
        )).toEqual({ username: 'user123' })
    })

    test('Test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '123' }
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword('123test')
        )).toEqual({ password: '123test' })
    })
})
