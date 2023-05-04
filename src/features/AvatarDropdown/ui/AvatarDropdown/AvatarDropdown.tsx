import { classNames } from '@/shared/lib/classNames/classNames'
import React, { memo, useCallback } from 'react'
import { Avatar } from '@/shared/ui/Avatar'
import { Dropdown } from '@/shared/ui/Popups'
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '@/entities/User'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { getRouteAdmin, getRouteProfile } from '@/shared/const/router'

interface AvatarDropdownProps {
    className?: string
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
    const { className } = props
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const isAdmin = useSelector(isUserAdmin)
    const isManager = useSelector(isUserManager)
    const authData = useSelector(getUserAuthData)

    const onLogOut = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    const isAdminPanelAvailable = isAdmin || isManager

    if (!authData) {
        return null
    }

    return (
        <Dropdown
            className={classNames('', {}, [className])}
            direction={'bottom left'}
            items={[
                ...(isAdminPanelAvailable
                    ? [{
                        content: t('Admin panel'),
                        href: getRouteAdmin()
                    }]
                    : []),
                {
                    content: t('Profile'),
                    href: getRouteProfile(authData.id)
                },
                {
                    content: t('Logout'),
                    onClick: onLogOut
                }
            ]}
            trigger={<Avatar size={30} src={authData.avatar}/>}
        />
    )
})
