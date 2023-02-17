import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { CustomButton, ThemeButton } from './CustomButton'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
    title: 'shared/CustomButton',
    component: CustomButton,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof CustomButton>

const Template: ComponentStory<typeof CustomButton> = (args) => <CustomButton {...args} />

export const Primary = Template.bind({})
Primary.args = {
    children: 'Text'
}

export const Clear = Template.bind({})
Clear.args = {
    children: 'Text',
    theme: ThemeButton.CLEAR
}

export const Outline = Template.bind({})
Outline.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE
}

export const OutlineDark = Template.bind({})
OutlineDark.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]
