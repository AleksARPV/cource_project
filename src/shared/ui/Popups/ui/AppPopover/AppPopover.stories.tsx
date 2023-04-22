import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { AppPopover } from './AppPopover'

export default {
    title: 'shared/AppPopover',
    component: AppPopover,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof AppPopover>

const Template: ComponentStory<typeof AppPopover> = (args) => <AppPopover {...args} />

export const Normal = Template.bind({})
Normal.args = {}
