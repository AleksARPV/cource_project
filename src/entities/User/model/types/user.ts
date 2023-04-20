import { type UserRole } from '../consts/constsUser'

export interface User {
    id: string
    username: string
    avatar?: string
    roles?: UserRole[]
}

export interface UserSchema {
    authData?: User
    _authorized: boolean
}
