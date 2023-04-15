import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type ProfileInterface } from 'entities/Profile'
import { getProfileFormData } from '../../selectors/getProfileFormData/getProfileFormData'
import { validateProfileData } from '../../services/validateProfileData/validateProfileData'
import { ValidateProfileError } from '../../types/EditableProfileCardSchema'

export const updateProfileData = createAsyncThunk<ProfileInterface, void, ThunkConfig<ValidateProfileError[]>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI

        const formData = getProfileFormData(getState())

        const errors = validateProfileData(formData)

        if (errors.length) {
            return rejectWithValue(errors)
        }

        try {
            const response = await extra.api.put<ProfileInterface>('/profile/' + formData?.id, formData)
            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (e) {
            console.log(e)
            return rejectWithValue([ValidateProfileError.SERVER_ERROR])
        }
    }
)
