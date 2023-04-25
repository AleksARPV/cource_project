import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Text, TextSize, TextType } from './Text'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Primary = Template.bind({})
Primary.args = {
    title: 'Title Text',
    text: 'Sample text'
}

export const Error = Template.bind({})
Error.args = {
    title: 'Title Text',
    text: 'Sample text',
    theme: TextType.ERROR
}

export const onlyTitle = Template.bind({})
onlyTitle.args = {
    title: 'Title Text'
}

export const onlyText = Template.bind({})
onlyText.args = {
    text: 'Sample text'
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
    title: 'Title Text',
    text: 'Sample text'
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const onlyTitleDark = Template.bind({})
onlyTitleDark.args = {
    title: 'Title Text'
}
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const onlyTextDark = Template.bind({})
onlyTextDark.args = {
    text: 'Sample text'
}
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Size_L = Template.bind({})
Size_L.args = {
    title: 'Title Text',
    text: 'Sample text',
    size: TextSize.L
}

export const Size_M = Template.bind({})
Size_M.args = {
    title: 'Title Text',
    text: 'Sample text',
    size: TextSize.M
}

export const Size_S = Template.bind({})
Size_S.args = {
    title: 'Title Text',
    text: 'Sample text',
    size: TextSize.S
}
