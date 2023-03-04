import { type Country, type Currency } from 'shared/const/common'

export interface ProfileInterface {
    'firstname': string
    'lastname': string
    'age': number
    'currency': Currency
    'country': Country
    'city': string
    'username': string
    'avatar': string
}

export interface ProfileSchema {
    data?: ProfileInterface
    isLoading: boolean
    error?: string
    readonly: boolean
}
