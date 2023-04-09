import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { AppListBox } from './AppListBox'

export default {
    title: 'shared/AppListBox',
    component: AppListBox,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof AppListBox>

const people = [
    { id: 1, name: 'Durward Reynolds', unavailable: false },
    { id: 2, name: 'Kenton Towne', unavailable: false },
    { id: 3, name: 'Therese Wunsch', unavailable: false },
    { id: 4, name: 'Benedict Kessler', unavailable: true },
    { id: 5, name: 'Katelyn Rohan', unavailable: false }
]

// @ts-ignore
const Template: ComponentStory<typeof AppListBox> = (args) => <AppListBox {...args} />

export const Normal = Template.bind({})
Normal.args = {}
