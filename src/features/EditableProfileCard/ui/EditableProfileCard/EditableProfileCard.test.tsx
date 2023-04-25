import { screen } from '@testing-library/react'
import { EditableProfileCard } from './EditableProfileCard'
import { componentRender } from '@/shared/config/tests/componentRender/componentRender'
import { type ProfileInterface } from '@/entities/Profile'
import { Currency } from '@/entities/Currency'
import { Country } from '@/entities/Country'
import { profileReducer } from '../../model/slice/profileSlice'
import userEvent from '@testing-library/user-event'
import { $api } from '@/shared/api/api'

const profile: ProfileInterface = {
    id: '1',
    firstname: 'Admin',
    lastname: 'AdminLastname',
    age: 44,
    currency: Currency.USD,
    country: Country.USA,
    city: 'Denver',
    username: 'adm123'
}

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            formData: profile
        },
        user: {
            authData: { id: '1', username: 'adm123' }
        }
    },
    asyncReducers: {
        profile: profileReducer
    }
}

describe('feature/EditableProfileCard', () => {
    test('Readonly should switch off', async () => {
        componentRender(<EditableProfileCard id={'1'}/>, options)
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))
        expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument()
    })

    test('Cancel button should reset data', async () => {
        componentRender(<EditableProfileCard id={'1'}/>, options)
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))

        await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'))
        await userEvent.clear(screen.getByTestId('ProfileCard.Lastname'))

        await userEvent.type(screen.getByTestId('ProfileCard.Firstname'), 'user')
        await userEvent.type(screen.getByTestId('ProfileCard.Lastname'), 'user')

        expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue('user')
        expect(screen.getByTestId('ProfileCard.Lastname')).toHaveValue('user')

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'))

        expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue('Admin')
        expect(screen.getByTestId('ProfileCard.Lastname')).toHaveValue('AdminLastname')
    })

    test('Error should appear', async () => {
        componentRender(<EditableProfileCard id={'1'}/>, options)
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))

        await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'))

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'))

        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument()
    })

    test('If there are no validation errors data should go to the server via PUT', async () => {
        const mockPutReq = jest.spyOn($api, 'put')
        componentRender(<EditableProfileCard id={'1'}/>, options)
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))

        await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'))
        await userEvent.type(screen.getByTestId('ProfileCard.Firstname'), 'user')

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'))

        expect(mockPutReq).toHaveBeenCalled()
    })
})
