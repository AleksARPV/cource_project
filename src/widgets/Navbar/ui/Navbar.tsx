import React, { useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { Modal } from 'shared/ui/Modal/Modal'
import { useTranslation } from 'react-i18next'
import { ButtonType, CustomButton } from 'shared/ui/CustomButton/CustomButton'

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation()
    const [isAuthModal, setIsAuthModal] = useState(false)

    const onToggleModal = useCallback(() => {
        setIsAuthModal(prevState => !prevState)
    }, [])
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <CustomButton theme={ButtonType.CLEAR_INVERTED} className={cls.links} onClick={onToggleModal}>
                {t('Login')}
            </CustomButton>
            <Modal
                isOpen={isAuthModal}
                onClose={onToggleModal}
            >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est et minima porro suscipit!
                Cupiditate, minima, similique. Autem magni quod quos, sapiente tempore vel voluptate. Accusamus
                culpa excepturi in laboriosam modi nobis quas quis recusandae reiciendis veniam? Architecto
                aspernatur deleniti deserunt dolor dolores doloribus, ducimus eum necessitatibus optio, recusandae
                repudiandae voluptates.
            </Modal>
        </div>
    )
}
