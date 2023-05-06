import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import ArticleRating from './ArticleRating'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
    title: 'features/ArticleRating',
    component: ArticleRating,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ArticleRating>

const Template: ComponentStory<typeof ArticleRating> = (args) => <ArticleRating {...args} />

export const Normal = Template.bind({})
Normal.args = {
    articleId: '1'
}
Normal.decorators = [
    StoreDecorator({
        user: {
            authData: { id: '1' }
        }
    })
]

Normal.parameters = {
    mockData: [
        {
            url: __API__ + '/article-ratings?userId=1&articleId=1',
            method: 'GET',
            status: 200,
            response: [
                {
                    rate: 4
                }
            ]
        }
    ]
}

export const WithNoRate = Template.bind({})
WithNoRate.args = {
    articleId: '2'
}
WithNoRate.decorators = [
    StoreDecorator({
        user: {
            authData: { id: '2' }
        }
    })
]

WithNoRate.parameters = {
    mockData: [
        {
            url: __API__ + '/article-ratings?userId=1&articleId=1',
            method: 'GET',
            status: 200,
            response: []
        }
    ]
}
