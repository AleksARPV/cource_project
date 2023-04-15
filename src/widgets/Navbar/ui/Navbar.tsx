import React, { memo, useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ButtonType } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUserName'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from 'entities/User'
import { Text, TextType } from 'shared/ui/Text/Text'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { Dropdown } from 'shared/ui/Dropdown/Dropdown'
import { Avatar } from 'shared/ui/Avatar/Avatar'

interface NavbarProps {
    className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation()
    const [isAuthModal, setIsAuthModal] = useState(false)
    const authData = useSelector(getUserAuthData)
    const dispatch = useDispatch()
    const isAdmin = useSelector(isUserAdmin)
    const isManager = useSelector(isUserManager)

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    }, [])

    const onShowModal = useCallback(() => {
        setIsAuthModal(true)
    }, [])

    const onLogOut = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    const isAdminPanelAvailable = isAdmin || isManager

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Text theme={TextType.INVERTED} className={cls.appName} title={t('Ulbi TV Course App')}/>
                <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.articles_create}>
                    {t('Create article')}
                </AppLink>
                <Dropdown
                    direction={'bottom left'}
                    className={cls.dropdown}
                    items={[
                        ...(isAdminPanelAvailable
                            ? [{
                                content: t('Admin panel'),
                                href: RoutePath.admin_panel
                            }]
                            : []),
                        {
                            content: t('Profile'),
                            href: RoutePath.profile + authData.id
                        },
                        {
                            content: t('Logout'),
                            onClick: onLogOut
                        }
                    ]}
                    trigger={<Avatar size={30} src={authData.avatar}/>}
                />
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
