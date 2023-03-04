import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Text.module.scss'
import { memo } from 'react'

export enum TextType {
    NORMAL = 'primary',
    ERROR = 'error'
}

interface TextProps {
    className?: string
    title?: string
    text?: string
    theme?: TextType
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        theme = TextType.NORMAL
    } = props
    return (
        <div className={classNames(cls.Text, {}, [className, cls[theme]])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    )
})
