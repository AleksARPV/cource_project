import { classNames } from '@/shared/lib/classNames/classNames'
import { Currency } from '../../model/types/currency'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { AppListBox } from '@/shared/ui/Popups/ui/AppListBox/AppListBox'

interface CurrencySelectProps {
    className?: string
    value?: Currency
    onChange?: (value: Currency) => void
    readonly?: boolean
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD }
]

export const CurrencySelect = memo(({ className, value, onChange, readonly }: CurrencySelectProps) => {
    const { t } = useTranslation('profile')

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency)
    }, [onChange])

    return <AppListBox
        onChange={onChangeHandler}
        value={value}
        items={options}
        defaultValue={t('Choose currency')}
        label={t('Choose currency')}
        className={classNames('', {}, [className])}
        readonly={readonly}
        direction={'top right'}
    />
})
