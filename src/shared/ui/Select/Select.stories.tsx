import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Select } from './Select'

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const Primary = Template.bind({})
Primary.args = {
    label: 'Test text',
    options: [
        { value: '123', content: '123Content' },
        { value: '1234', content: '1234Content' },
        { value: '12345', content: '12345Content' },
        { value: '123456', content: '123456Content' }
    ]
}
