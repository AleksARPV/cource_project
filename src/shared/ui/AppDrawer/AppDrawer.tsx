import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import { memo, type ReactNode } from 'react'
import cls from './AppDrawer.module.scss'
import { useTheme } from 'app/providers/ThemeProvider'
import { Portal } from '../Portal/Portal'
import { Overlay } from '../Overlay/Overlay'

interface AppDrawerProps {
    className?: string
    children: ReactNode
    isOpen?: boolean
    onClose?: () => void
}

export const AppDrawer = memo((props: AppDrawerProps) => {
    const { className, onClose, isOpen, children } = props
    const { theme } = useTheme()
    const mods: Mods = {
        [cls.opened]: isOpen
    }

    return (
        <Portal>
            <div className={classNames(cls.AppDrawer, mods, [className, theme, 'app_drawer'])}>
                <Overlay onClick={onClose}/>
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>
    )
})
