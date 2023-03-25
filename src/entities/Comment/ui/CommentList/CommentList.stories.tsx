import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { CommentList } from './CommentList'

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof CommentList>

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />

export const Normal = Template.bind({})
Normal.args = {
    comments: [
        {
            id: '1',
            text: 'Text 1',
            user: { id: '1', username: 'User1' }
        },
        {
            id: '2',
            text: 'Text 2',
            user: { id: '2', username: 'User2' }
        }
    ]
}

export const Loading = Template.bind({})
Loading.args = {
    comments: [],
    isLoading: true
}
