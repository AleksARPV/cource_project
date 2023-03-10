import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Button, ButtonSize, ButtonType } from './Button'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

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

export const ClearInverted = Template.bind({})
ClearInverted.args = {
    children: 'Text',
    theme: ButtonType.CLEAR_INVERTED
}
ClearInverted.decorators = [ThemeDecorator(Theme.DARK)]

export const Outline = Template.bind({})
Outline.args = {
    children: 'Text',
    theme: ButtonType.OUTLINE
}

export const OutlineInverted = Template.bind({})
OutlineInverted.args = {
    children: 'Text',
    theme: ButtonType.OUTLINE_INVERTED
}
OutlineInverted.decorators = [ThemeDecorator(Theme.DARK)]

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

export const Disabled = Template.bind({})
Disabled.args = {
    children: 'Disabled',
    theme: ButtonType.OUTLINE,
    disabled: true
}
