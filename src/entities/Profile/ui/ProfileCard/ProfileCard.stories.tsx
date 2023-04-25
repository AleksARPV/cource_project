import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ProfileCard } from './ProfileCard'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import avatar_icon from '../../../../shared/assets/mic/avatar_profile.jpg'

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />

export const Primary = Template.bind({})
Primary.args = {
    data: {
        username: 'TestUsername',
        firstname: 'TestFirstname',
        lastname: 'TestLastname',
        age: 33,
        country: Country.USA,
        city: 'Los Angeles',
        currency: Currency.USD,
        avatar: avatar_icon
    }
}

export const Error = Template.bind({})
Error.args = {
    error: 'error'
}

export const Loading = Template.bind({})
Loading.args = {
    isLoading: true
}
