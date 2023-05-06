import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { NotificationList } from './NotificationList'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof NotificationList>

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [
    StoreDecorator({})
]
Normal.parameters = {
    mockData: [
        {
            url: __API__ + '/notifications',
            method: 'GET',
            status: 200,
            response: [
                {
                    id: '1',
                    title: 'Notification',
                    description: 'Test notification description'
                },
                {
                    id: '2',
                    title: 'Notification 2',
                    description: 'Test notification description'
                },
                {
                    id: '3',
                    title: 'Notification 3',
                    description: 'Test notification description'
                }
            ]
        }
    ]
}
