import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type ProfileInterface } from '../../types/profile'

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const fetchProfileData = createAsyncThunk<ProfileInterface, void, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI
        try {
            const response = await extra.api.get<ProfileInterface>('/profile')

            return response.data
        } catch (e) {
            console.log(e)
            return rejectWithValue('ERROR')
        }
    }
)
