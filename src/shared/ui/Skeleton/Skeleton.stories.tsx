import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Skeleton } from './Skeleton'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Skeleton>

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />

export const Normal = Template.bind({})
Normal.args = {
    width: '100%',
    height: 150
}

export const Circle = Template.bind({})
Circle.args = {
    border: '50%',
    width: 80,
    height: 80
}

export const NormalDark = Template.bind({})
NormalDark.args = {
    width: '100%',
    height: 150
}
NormalDark.decorators = [ThemeDecorator(Theme.DARK)]

export const CircleDark = Template.bind({})
CircleDark.args = {
    border: '50%',
    width: 80,
    height: 80
}
CircleDark.decorators = [ThemeDecorator(Theme.DARK)]
