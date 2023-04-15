import { type StateSchema } from 'app/providers/StoreProvider'
import { ValidateProfileError } from '../../types/EditableProfileCardSchema'
import { getProfileValidateErrors } from './getProfileValidateErrors'

describe('getProfileValidateErrors', () => {
    test('Should return validateErrors', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [
                    ValidateProfileError.SERVER_ERROR,
                    ValidateProfileError.NO_DATA
                ]
            }
        }
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([
            ValidateProfileError.SERVER_ERROR,
            ValidateProfileError.NO_DATA
        ])
    })
    test('Should return undefined', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined)
    })
})
