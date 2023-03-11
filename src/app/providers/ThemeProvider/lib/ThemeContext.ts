import { createContext } from 'react'

export enum Theme {
    LIGHT = 'app_light',
    DARK = 'app_dark',
    THIRD_THEME = 'app_third_theme'
}

export interface ThemeContextProps {
    theme?: Theme
    setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme'
