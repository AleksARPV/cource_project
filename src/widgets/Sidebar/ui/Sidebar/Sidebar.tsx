import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import React, { memo, useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher'
import { Button, ButtonSize, ButtonType } from 'shared/ui/Button/Button'
import { BugButton } from 'app/providers/ErrorBoundary'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import { useSelector } from 'react-redux'
import { getSidebarItems } from '../../model/selectors/getSidebarItems'
import { VStack } from 'shared/ui/Stack/VStack/VStack'

interface SidebarProps {
    className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)
    const sidebarItemsList = useSelector(getSidebarItems)

    const onToggle = () => {
        setCollapsed(prevState => !prevState)
    }

    return (
        <aside
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
            <VStack role='navigation' gap='8' className={cls.items}>
                {sidebarItemsList.map((item) => (
                    <SidebarItem
                        item={item}
                        key={item.path}
                        collapsed={collapsed}
                    />
                ))}
            </VStack>
            <BugButton className={cls.bugBtn}/>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher short={collapsed} className={cls.lang}/>
            </div>
        </aside>
    )
})
