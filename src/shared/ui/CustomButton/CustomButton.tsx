import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CustomButton.module.scss'
import { type ButtonHTMLAttributes, type FC } from 'react'

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline'
}

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton
}

export const CustomButton: FC<CustomButtonProps> = (props) => {
    const { className, children, theme, ...otherProps } = props
    return (
        <button
            type={'button'}
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    )
}
