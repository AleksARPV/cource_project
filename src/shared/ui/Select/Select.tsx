import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import cls from './Select.module.scss'
import { type ChangeEvent, memo, useMemo } from 'react'

export interface SelectOption {
    value: string
    content: string
}

interface SelectProps {
    className?: string
    label?: string
    options?: SelectOption[]
    value?: string
    onChange?: (value: string) => void
    readonly?: boolean
}

export const Select = memo((props: SelectProps) => {
    const {
        className,
        label,
        options,
        onChange,
        value,
        readonly
    } = props

    const mods: Mods = {}

    const optionsList = useMemo(() => {
        return options?.map(item => (
            <option className={cls.option} value={item.value} key={item.value}>
                {item.content}
            </option>
        ))
    }, [options])

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.target.value)
        }
    }

    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && <span className={cls.label}>{label + '>'}</span>}
            <select disabled={readonly} className={cls.select} value={value} onChange={onChangeHandler}>
                {optionsList}
            </select>
        </div>
    )
})
