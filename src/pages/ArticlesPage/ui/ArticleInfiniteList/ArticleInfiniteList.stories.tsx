import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { ArticleInfiniteList } from './ArticleInfiniteList'

export default {
    title: 'pages/ArticlesPage/ArticleInfiniteList',
    component: ArticleInfiniteList,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ArticleInfiniteList>

const Template: ComponentStory<typeof ArticleInfiniteList> = (args) => <ArticleInfiniteList {...args} />

export const Normal = Template.bind({})
Normal.args = {}
