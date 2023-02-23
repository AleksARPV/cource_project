import React, { useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ButtonType } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUserName'

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation()
    const [isAuthModal, setIsAuthModal] = useState(false)

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    }, [])

    const onShowModal = useCallback(() => {
        setIsAuthModal(true)
    }, [])

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button theme={ButtonType.CLEAR_INVERTED} className={cls.links} onClick={onShowModal}>
                {t('Login')}
            </Button>
            <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
            />
        </div>
    )
}
