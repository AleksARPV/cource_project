import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { NotificationItem } from './NotificationItem'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof NotificationItem>

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />

export const Normal = Template.bind({})
Normal.args = {
    item: {
        id: '1',
        title: 'Notification',
        description: 'Test notification description'
    }
}
Normal.decorators = [
    StoreDecorator({})
]
