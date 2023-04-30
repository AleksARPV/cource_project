import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Modal } from './Modal'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Primary = Template.bind({})
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est et minima porro suscipit!\n' +
        'Cupiditate, minima, similique. Autem magni quod quos, sapiente tempore vel voluptate. Accusamus\n' +
        'culpa excepturi in laboriosam modi nobis quas quis recusandae reiciendis veniam? Architecto\n' +
        'aspernatur deleniti deserunt dolor dolores doloribus, ducimus eum necessitatibus optio, recusandae\n' +
        'repudiandae voluptates.'
}

export const Dark = Template.bind({})
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est et minima porro suscipit!\n' +
        'Cupiditate, minima, similique. Autem magni quod quos, sapiente tempore vel voluptate. Accusamus\n' +
        'culpa excepturi in laboriosam modi nobis quas quis recusandae reiciendis veniam? Architecto\n' +
        'aspernatur deleniti deserunt dolor dolores doloribus, ducimus eum necessitatibus optio, recusandae\n' +
        'repudiandae voluptates.'
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
