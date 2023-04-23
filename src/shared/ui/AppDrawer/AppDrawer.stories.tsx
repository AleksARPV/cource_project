import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { AppDrawer } from './AppDrawer'

export default {
    title: 'shared/AppDrawer',
    component: AppDrawer,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof AppDrawer>

const Template: ComponentStory<typeof AppDrawer> = (args) => <AppDrawer {...args} />

export const Normal = Template.bind({})
Normal.args = {}
