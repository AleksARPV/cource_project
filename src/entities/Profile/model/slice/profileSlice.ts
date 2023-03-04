import { createSlice } from '@reduxjs/toolkit'
import { type ProfileSchema } from 'entities/Profile'

const initialState: ProfileSchema = {
    data: undefined,
    error: undefined,
    isLoading: false,
    readonly: true
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {}
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice

export default profileSlice.reducer