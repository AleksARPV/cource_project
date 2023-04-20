import { type ProfileInterface } from 'entities/Profile'
import { type ValidateProfileError } from '../consts/constsEditableProfileCard'

export interface ProfileSchema {
    data?: ProfileInterface
    formData?: ProfileInterface
    isLoading: boolean
    error?: string
    readonly: boolean
    validateErrors?: ValidateProfileError[]
}
