import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Tabs } from './Tabs'
import { action } from '@storybook/addon-actions'

export default {
    title: 'shared/Tabs',
    component: Tabs,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Tabs>

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />

export const Normal = Template.bind({})
Normal.args = {
    tabs: [
        {
            value: 'Tab 1',
            content: 'Tab 1'
        },
        {
            value: 'Tab 2',
            content: 'Tab 2'
        },
        {
            value: 'Tab 3',
            content: 'Tab 3'
        }
    ],
    value: 'Tab 2',
    onTabClick: action('onTabClick')
}
