import { Fragment, type ReactNode, useState } from 'react'
import { Listbox } from '@headlessui/react'
import cls from './AppListBox.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button } from '../../../Button/Button'
import { HStack } from '../../../Stack'
import { type DropdownDirection } from '../../../../types/ui'
import { mapDirectionClass } from '../../styles/consts'
import popupCls from '../../styles/popup.module.scss'

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
                className={classNames('', {}, [className, popupCls.popup])}
                value={value}
                onChange={onChange}
            >
                <Listbox.Button className={popupCls.trigger}>
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
                                        [popupCls.active]: active,
                                        [cls.checked]: selected,
                                        [popupCls.disabled]: item.disabled
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
