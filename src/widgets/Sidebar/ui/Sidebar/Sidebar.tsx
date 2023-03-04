import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import React, { memo, useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher'
import { Button, ButtonSize, ButtonType } from 'shared/ui/Button/Button'
import { BugButton } from 'app/providers/ErrorBoundary'
import { SidebarItemsList } from '../../model/items'
import { SidebarItem } from '../SidebarItem/SidebarItem'

interface SidebarProps {
    className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prevState => !prevState)
    }

    return (
        <div
            data-testid='sidebar'
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <Button
                data-testid='sidebar-toggle'
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ButtonType.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                {SidebarItemsList.map((item) => (
                    <SidebarItem
                        item={item}
                        key={item.path}
                        collapsed={collapsed}
                    />
                ))}
            </div>
            <BugButton className={cls.bugBtn}/>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher short={collapsed} className={cls.lang}/>
            </div>
        </div>
    )
})
