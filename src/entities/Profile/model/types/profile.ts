import { type Currency } from 'entities/Currency/model/types/currency'
import { type Country } from 'entities/Country/model/types/country'

export interface ProfileInterface {
    firstname?: string
    lastname?: string
    age?: number
    currency?: Currency
    country?: Country
    city?: string
    username?: string
    avatar?: string
}

export interface ProfileSchema {
    data?: ProfileInterface
    formData?: ProfileInterface
    isLoading: boolean
    error?: string
    readonly: boolean
}
