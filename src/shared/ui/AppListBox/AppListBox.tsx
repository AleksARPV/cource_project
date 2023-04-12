import { Fragment, type ReactNode, useState } from 'react'
import { Listbox } from '@headlessui/react'
import cls from './AppListBox.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from '../Button/Button'
import { HStack } from '../Stack'
import { type DropdownDirection } from '../../types/ui'

export interface ListBoxItem {
    value: string
    content: ReactNode
    disabled?: boolean
}

interface ListBoxProps {
    items?: ListBoxItem[]
    className?: string
    value?: string
    defaultValue?: string
    onChange: (value: string) => void
    readonly?: boolean
    direction?: DropdownDirection
    label?: string
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom left': cls.optionBottomLeft,
    'bottom right': cls.optionBottomRight,
    'top right': cls.optionTopRight,
    'top left': cls.optionTopLeft
}

export function AppListBox (props: ListBoxProps) {
    const { className, items, defaultValue, value, onChange, readonly, direction = 'bottom right', label } = props
    const [selectedPerson, setSelectedPerson] = useState()

    const optionsClasses = [
        mapDirectionClass[direction]
    ]

    return (
        <HStack gap={'4'}>
            {label && <span>{`${label}:>`}</span>}
            <Listbox
                disabled={readonly}
                as='div'
                className={classNames(cls.AppListBox, {}, [className])}
                value={value}
                onChange={onChange}
            >
                <Listbox.Button className={cls.trigger}>
                    <Button disabled={readonly}>
                        {value ?? defaultValue}
                    </Button>
                </Listbox.Button>
                <Listbox.Options className={classNames(cls.optionsList, {}, optionsClasses)}>
                    {items?.map((item) => (
                        <Listbox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(cls.optionItem, {
                                        [cls.active]: active,
                                        [cls.checked]: selected,
                                        [cls.disabled]: item.disabled
                                    }, [])}
                                >
                                    {selected}
                                    {item.content}
                                </li>
                            )}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </Listbox>
        </HStack>
    )
}
