import React from 'react'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { CustomButton, ThemeButton } from 'shared/ui/CustomButton/CustomButton'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme()
    return (
        <CustomButton
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
            theme={ThemeButton.CLEAR}
        >
            {theme === Theme.LIGHT ? <LightIcon/> : <DarkIcon/>}
        </CustomButton>
    )
}
