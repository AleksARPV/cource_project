import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'
import { type ProfileInterface, type ProfileSchema } from '../types/profile'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'

const initialState: ProfileSchema = {
    data: undefined,
    error: undefined,
    isLoading: false,
    readonly: true
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload
        },
        updateProfile: (state, action: PayloadAction<ProfileInterface>) => {
            state.formData = {
                ...state.formData,
                ...action.payload
            }
        },
        cancelEdit: (state) => {
            state.readonly = true
            state.formData = state.data
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<ProfileInterface>) => {
                state.isLoading = false
                state.data = action.payload
                state.formData = action.payload
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
            .addCase(updateProfileData.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<ProfileInterface>) => {
                state.isLoading = false
                state.data = action.payload
                state.formData = action.payload
                state.readonly = true
            })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice

export default profileSlice.reducer
