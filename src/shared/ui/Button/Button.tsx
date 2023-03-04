import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'
import { type ButtonHTMLAttributes, type FC, memo, type ReactNode } from 'react'

export enum ButtonType {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
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
    disabled?: boolean
    children?: ReactNode
}

export const Button: FC<CustomButtonProps> = memo((props: CustomButtonProps) => {
    const {
        className,
        children,
        theme,
        square,
        size = ButtonSize.M,
        disabled,
        ...otherProps
    } = props

    const mods: Record<string, boolean> = {
        [cls.square]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled
    }

    return (
        <button
            type={'button'}
            className={classNames(cls.Button, mods, [className, cls[theme]])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    )
})
