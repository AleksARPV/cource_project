import { classNames, type Mods } from '@/shared/lib/classNames/classNames'
import { memo, type ReactNode } from 'react'
import cls from './AppDrawer.module.scss'
import { Portal } from '../Portal/Portal'
import { Overlay } from '../Overlay/Overlay'
import { useModal } from '@/shared/lib/hooks/useModal/useModal'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'

interface AppDrawerProps {
    className?: string
    children: ReactNode
    isOpen?: boolean
    onClose?: () => void
    lazy?: boolean
}

export const AppDrawer = memo((props: AppDrawerProps) => {
    const { className, onClose, isOpen, children, lazy } = props

    const {
        isClosing, close, isMounted
    } = useModal({
        animationDelay: 300,
        onClose,
        isOpen
    })

    const { theme } = useTheme()

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing
    }

    if (lazy && !isMounted) {
        return null
    }

    return (
        <Portal>
            <div className={classNames(cls.AppDrawer, mods, [className, theme, 'app_drawer'])}>
                <Overlay onClick={close}/>
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>
    )
})
