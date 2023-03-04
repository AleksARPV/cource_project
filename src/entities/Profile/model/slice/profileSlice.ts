import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'
import { type ProfileInterface, type ProfileSchema } from '../types/profile'

const initialState: ProfileSchema = {
    data: undefined,
    error: undefined,
    isLoading: false,
    readonly: true
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<ProfileInterface>) => {
                state.isLoading = false
                state.data = action.payload
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice

export default profileSlice.reducer
