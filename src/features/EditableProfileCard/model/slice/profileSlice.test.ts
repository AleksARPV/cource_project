import { profileActions, profileReducer } from './profileSlice'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { type ProfileSchema } from '../types/EditableProfileCardSchema'
import { ValidateProfileError } from '../consts/constsEditableProfileCard'

const data = {
    username: 'TestUsername',
    firstname: 'TestFirstname',
    lastname: 'TestLastname',
    age: 33,
    country: Country.USA,
    city: 'Los Angeles',
    currency: Currency.USD
}

describe('profileSlice.test', () => {
    test('Test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false }
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(true)
        )).toEqual({ readonly: true })
    })

    test('Test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = { data, formData: { username: '' } }
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit()
        )).toEqual({
            readonly: true,
            validateErrors: undefined,
            data,
            formData: data
        })
    })

    test('Test update profile', () => {
        const state: DeepPartial<ProfileSchema> = { formData: { username: '123' } }

        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile({
                username: '123456'
            })
        )).toEqual({
            formData: { username: '123456' }
        })
    })

    test('Test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR]
        }

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending
        )).toEqual({
            isLoading: true,
            validateErrors: undefined
        })
    })

    test('Test update profile service fullfiled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true
        }

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, '')
        )).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readonly: true,
            validateError: undefined,
            formData: data,
            data
        })
    })
})
