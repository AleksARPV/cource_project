import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ButtonSize, ButtonType, CustomButton } from './CustomButton'
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

export const PrimarySizeL = Template.bind({})
PrimarySizeL.args = {
    children: 'Text',
    size: ButtonSize.L
}

export const PrimarySizeXL = Template.bind({})
PrimarySizeXL.args = {
    children: 'Text',
    size: ButtonSize.XL
}

export const Clear = Template.bind({})
Clear.args = {
    children: 'Text',
    theme: ButtonType.CLEAR
}

export const Outline = Template.bind({})
Outline.args = {
    children: 'Text',
    theme: ButtonType.OUTLINE
}

export const OutlineDark = Template.bind({})
OutlineDark.args = {
    children: 'Text',
    theme: ButtonType.OUTLINE
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Background = Template.bind({})
Background.args = {
    children: 'Text',
    theme: ButtonType.BACKGROUND
}

export const BackgroundInverted = Template.bind({})
BackgroundInverted.args = {
    children: 'Text',
    theme: ButtonType.BACKGROUND_INVERTED
}

export const Square = Template.bind({})
Square.args = {
    children: '>',
    theme: ButtonType.BACKGROUND_INVERTED,
    square: true
}

export const SquareSizeL = Template.bind({})
SquareSizeL.args = {
    children: '>',
    theme: ButtonType.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L
}

export const SquareSizeXL = Template.bind({})
SquareSizeXL.args = {
    children: '>',
    theme: ButtonType.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL
}
