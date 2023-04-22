import { classNames } from 'shared/lib/classNames/classNames'
import React, { memo } from 'react'
import cls from './NotificationButton.module.scss'
import { Button, ButtonType } from 'shared/ui/Button/Button'
import { Icon } from 'shared/ui/Icon/Icon'
import { NotificationList } from 'entities/Notification'
import { AppPopover } from 'shared/ui/Popups'
import NotificationIcon from 'shared/assets/icons/notification.svg'

interface NotificationButtonProps {
    className?: string
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props
    return (
        <AppPopover className={classNames(cls.NotificationButton, {}, [className])} trigger={(
            <Button theme={ButtonType.CLEAR}>
                <Icon inverted Svg={NotificationIcon}/>
            </Button>
        )}>
            <NotificationList className={cls.notifications}/>
        </AppPopover>
    )
})
