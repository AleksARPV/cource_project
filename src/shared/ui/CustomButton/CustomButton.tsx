import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CustomButton.module.scss'
import { type ButtonHTMLAttributes, type FC } from 'react'

export enum ButtonType {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonType
    square?: boolean
    size?: ButtonSize
}

export const CustomButton: FC<CustomButtonProps> = (props) => {
    const { className, children, theme, square, size = ButtonSize.M, ...otherProps } = props

    const mods: Record<string, boolean> = {
        [cls.square]: square,
        [cls[size]]: true
    }

    return (
        <button
            type={'button'}
            className={classNames(cls.Button, mods, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    )
}
