import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { AppListBox } from './AppListBox'

export default {
    title: 'shared/AppListBox',
    component: AppListBox,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    decorators: [
        Story => <div style={{ padding: 100 }}><Story/></div>
    ]
} as ComponentMeta<typeof AppListBox>

// @ts-ignore
const Template: ComponentStory<typeof AppListBox> = (args) => <AppListBox {...args} />

export const Normal = Template.bind({})
Normal.args = {
    items: [
        { content: '123aaaaa', value: '123' },
        { content: '123fffff', value: '1234' }
    ],
    value: '12345'
}

export const TopLeft = Template.bind({})
TopLeft.args = {
    items: [
        { content: '123aaaaa', value: '123' },
        { content: '123fffff', value: '1234' }
    ],
    direction: 'top left',
    value: '12345'
}

export const TopRight = Template.bind({})
TopRight.args = {
    items: [
        { content: '123aaaaa', value: '123' },
        { content: '123fffff', value: '1234' }
    ],
    direction: 'top right',
    value: '12345'
}

export const BottomLeft = Template.bind({})
BottomLeft.args = {
    items: [
        { content: '123aaaaa', value: '123' },
        { content: '123fffff', value: '1234' }
    ],
    direction: 'bottom left',
    value: '12345'
}

export const BottomRight = Template.bind({})
BottomRight.args = {
    items: [
        { content: '123aaaaa', value: '123' },
        { content: '123fffff', value: '1234' }
    ],
    direction: 'bottom right',
    value: '12345'
}
