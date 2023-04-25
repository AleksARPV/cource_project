import { classNames } from '@/shared/lib/classNames/classNames'
import { memo, useCallback } from 'react'
import cls from './Code.module.scss'
import { Button, ButtonType } from '../Button/Button'
import CopyIcon from '@/shared/assets/icons/export_code.svg'

interface CodeProps {
    className?: string
    text: string
}

export const Code = memo((props: CodeProps) => {
    const { className, text } = props

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text)
    }, [text])
    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button
                onClick={onCopy}
                theme={ButtonType.CLEAR}
                className={cls.copyBtn}
            >
                <CopyIcon
                    className={cls.icon}
                />
            </Button>
            <code>
                {text}
            </code>
        </pre>
    )
})
