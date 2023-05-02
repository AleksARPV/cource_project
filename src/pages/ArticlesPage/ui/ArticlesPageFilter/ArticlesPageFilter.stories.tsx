import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ArticlesPageFilter } from './ArticlesPageFilter'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
    title: 'pages/Article/ArticlesPageFilter',
    component: ArticlesPageFilter,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    decorators: [StoreDecorator({})]
} as ComponentMeta<typeof ArticlesPageFilter>

const Template: ComponentStory<typeof ArticlesPageFilter> = (args) => <ArticlesPageFilter {...args} />

export const Normal = Template.bind({})
Normal.args = {}
