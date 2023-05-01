import React, { memo, useCallback, useState } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ButtonType } from '@/shared/ui/Button'
import { LoginModal } from '@/features/AuthByUserName'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'
import { Text, TextType } from '@/shared/ui/Text'
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink'
import { HStack } from '@/shared/ui/Stack'
import { NotificationButton } from '@/features/NotificationButton'
import { AvatarDropdown } from '@/features/AvatarDropdown'
import { RoutePath } from '@/shared/const/router'

interface NavbarProps {
    className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation()
    const [isAuthModal, setIsAuthModal] = useState(false)
    const authData = useSelector(getUserAuthData)

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    }, [])

    const onShowModal = useCallback(() => {
        setIsAuthModal(true)
    }, [])

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Text theme={TextType.INVERTED} className={cls.appName} title={t('Ulbi TV Course App')}/>
                <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.articles_create}>
                    {t('Create article')}
                </AppLink>
                <HStack gap={'16'} className={cls.actions}>
                    <NotificationButton/>
                    <AvatarDropdown/>
                </HStack>

            </header>
        )
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Text theme={TextType.INVERTED} className={cls.appName} title={t('Ulbi TV Course App')}/>
            <Button theme={ButtonType.CLEAR_INVERTED} className={cls.links} onClick={onShowModal}>
                {t('Login')}
            </Button>
            {isAuthModal && <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
            />}
        </header>
    )
})
