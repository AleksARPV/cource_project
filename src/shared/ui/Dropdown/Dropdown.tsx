import { Menu } from '@headlessui/react'
import cls from './Dropdown.module.scss'
import { classNames } from '../../lib/classNames/classNames'
import { Fragment, type ReactNode } from 'react'
import { type DropdownDirection } from '../../types/ui'
import { AppLink } from '../AppLink/AppLink'

export interface DropdownItem {
    disabled?: boolean
    content?: ReactNode
    onClick?: () => void
    href?: string
}

interface DropdownProps {
    className?: string
    items: DropdownItem[]
    trigger?: ReactNode
    direction?: DropdownDirection
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom left': cls.menuBottomLeft,
    'bottom right': cls.menuBottomRight,
    'top right': cls.menuTopRight,
    'top left': cls.menuTopLeft
}

export function Dropdown (props: DropdownProps) {
    const { className, items, trigger, direction = 'bottom right' } = props

    const menuClasses = [
        mapDirectionClass[direction]
    ]

    return (
        <Menu as={'div'} className={classNames(cls.Dropdown, {}, [className])}>
            <Menu.Button className={cls.btn}>{trigger}</Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
                {items.map((item, index) => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            disabled={item.disabled}
                            type={'button'}
                            onClick={item.onClick}
                            className={classNames(cls.item, { [cls.active]: active }, [className])}
                        >
                            {item.content}
                        </button>
                    )

                    if (item.href) {
                        return (
                            <Menu.Item as={AppLink} to={item.href} disabled={item.disabled} key={index}>
                                {content}
                            </Menu.Item>
                        )
                    }
                    return (
                        <Menu.Item as={Fragment} disabled={item.disabled} key={index}>
                            {content}
                        </Menu.Item>
                    )
                })}
            </Menu.Items>
        </Menu>
    )
}
