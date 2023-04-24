import { classNames } from 'shared/lib/classNames/classNames'
import React, { memo, useCallback, useState } from 'react'
import cls from './NotificationButton.module.scss'
import { Button, ButtonType } from 'shared/ui/Button/Button'
import { Icon } from 'shared/ui/Icon/Icon'
import { NotificationList } from 'entities/Notification'
import { AppPopover } from 'shared/ui/Popups'
import NotificationIcon from 'shared/assets/icons/notification.svg'
import { useDevice } from 'shared/lib/hooks/useDevice/useDevice'
import { Drawer } from 'shared/ui/Drawer/Drawer'
import { AnimationProvider } from 'shared/lib/components/AnimationProvider'

interface NotificationButtonProps {
    className?: string
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props
    const [isOpen, setIsOpen] = useState(false)

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true)
    }, [])

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false)
    }, [])

    const trigger = (
        <Button onClick={onOpenDrawer} theme={ButtonType.CLEAR}>
            <Icon inverted Svg={NotificationIcon}/>
        </Button>
    )

    const isMobile = useDevice()

    if (isMobile) {
        return (
            <>
                {trigger}
                <AnimationProvider>
                    <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                        <NotificationList/>
                    </Drawer>
                </AnimationProvider>
            </>
        )
    }

    return (
        <AppPopover className={classNames(cls.NotificationButton, {}, [className])} trigger={trigger}>
            <NotificationList className={cls.notifications}/>
        </AppPopover>
    )
})
