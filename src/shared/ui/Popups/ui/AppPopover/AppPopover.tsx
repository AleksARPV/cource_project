import { Popover } from '@headlessui/react'
import { classNames } from 'shared/lib/classNames/classNames'
import { type ReactNode } from 'react'
import { type DropdownDirection } from 'shared/types/ui'
import { mapDirectionClass } from '../../styles/consts'
import cls from './AppPopover.module.scss'
import popupCls from '../../styles/popup.module.scss'

interface AppPopoverProps {
    className?: string
    trigger?: ReactNode
    direction?: DropdownDirection
    children: ReactNode
}

export function AppPopover (props: AppPopoverProps) {
    const { className, children, trigger, direction = 'bottom left' } = props
    const menuClasses = [
        mapDirectionClass[direction]
    ]
    return (
        <Popover className={classNames('', {}, [className, popupCls.popup])}>
            <Popover.Button className={popupCls.trigger}>
                {trigger}
            </Popover.Button>

            <Popover.Panel className={classNames(cls.panel, {}, menuClasses)}>
                {children}
            </Popover.Panel>
        </Popover>
    )
}
