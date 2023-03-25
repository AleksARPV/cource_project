import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { CommentCard } from './CommentCard'

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof CommentCard>

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />

export const Normal = Template.bind({})
Normal.args = {
    comment: {
        id: '1',
        text: 'Text 1',
        user: { id: '1', username: 'User 1' }
    }
}

export const Loading = Template.bind({})
Loading.args = {
    comment: {
        id: '1',
        text: 'Text 1',
        user: { id: '1', username: 'User 1' }
    },
    isLoading: true
}
