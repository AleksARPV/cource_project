import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Flex } from './Flex'
import { Card } from '../../Card/Card'

export default {
    title: 'shared/Flex',
    component: Flex,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Flex>

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />

export const Row = Template.bind({})
Row.args = {
    children: (
        <>
            <Card>Text 1</Card>
            <Card>Text 2</Card>
            <Card>Text 3</Card>
            <Card>Text 4</Card>
        </>
    )
}

export const RowGap4 = Template.bind({})
RowGap4.args = {
    gap: '4',
    children: (
        <>
            <Card>Text 1</Card>
            <Card>Text 2</Card>
            <Card>Text 3</Card>
            <Card>Text 4</Card>
        </>
    )
}

export const RowGap8 = Template.bind({})
RowGap8.args = {
    gap: '8',
    children: (
        <>
            <Card>Text 1</Card>
            <Card>Text 2</Card>
            <Card>Text 3</Card>
            <Card>Text 4</Card>
        </>
    )
}

export const RowGap16 = Template.bind({})
RowGap16.args = {
    gap: '16',
    children: (
        <>
            <Card>Text 1</Card>
            <Card>Text 2</Card>
            <Card>Text 3</Card>
            <Card>Text 4</Card>
        </>
    )
}
export const RowGap32 = Template.bind({})
RowGap32.args = {
    gap: '32',
    children: (
        <>
            <Card>Text 1</Card>
            <Card>Text 2</Card>
            <Card>Text 3</Card>
            <Card>Text 4</Card>
        </>
    )
}

export const Column = Template.bind({})
Column.args = {
    direction: 'column',
    children: (
        <>
            <Card>Text 1</Card>
            <Card>Text 2</Card>
            <Card>Text 3</Card>
            <Card>Text 4</Card>
        </>
    )
}

export const ColumnGap4 = Template.bind({})
ColumnGap4.args = {
    direction: 'column',
    gap: '4',
    children: (
        <>
            <Card>Text 1</Card>
            <Card>Text 2</Card>
            <Card>Text 3</Card>
            <Card>Text 4</Card>
        </>
    )
}

export const ColumnGap8 = Template.bind({})
ColumnGap8.args = {
    direction: 'column',
    gap: '8',
    children: (
        <>
            <Card>Text 1</Card>
            <Card>Text 2</Card>
            <Card>Text 3</Card>
            <Card>Text 4</Card>
        </>
    )
}

export const ColumnGap16 = Template.bind({})
ColumnGap16.args = {
    direction: 'column',
    gap: '16',
    children: (
        <>
            <Card>Text 1</Card>
            <Card>Text 2</Card>
            <Card>Text 3</Card>
            <Card>Text 4</Card>
        </>
    )
}
export const ColumnGap32 = Template.bind({})
ColumnGap32.args = {
    direction: 'column',
    gap: '32',
    children: (
        <>
            <Card>Text 1</Card>
            <Card>Text 2</Card>
            <Card>Text 3</Card>
            <Card>Text 4</Card>
        </>
    )
}
