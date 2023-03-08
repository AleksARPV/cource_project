import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type ProfileInterface } from '../../types/profile'
import { getProfileFormData } from 'entities/Profile'

export const updateProfileData = createAsyncThunk<ProfileInterface, void, ThunkConfig<string>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI

        const formData = getProfileFormData(getState())

        try {
            const response = await extra.api.put<ProfileInterface>('/profile', formData)
            return response.data
        } catch (e) {
            console.log(e)
            return rejectWithValue('ERROR')
        }
    }
)
