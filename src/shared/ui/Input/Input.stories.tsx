import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { CustomInput } from './CustomInput'

export default {
    title: 'shared/CustomInput',
    component: CustomInput,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof CustomInput>

const Template: ComponentStory<typeof CustomInput> = (args) => <CustomInput {...args} />

export const Primary = Template.bind({})
Primary.args = {
    placeholder: 'Type your text',
    value: 'Text typed'
}
