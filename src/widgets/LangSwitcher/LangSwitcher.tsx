import { useTranslation } from 'react-i18next'
import React from 'react'
import { Button, ButtonType } from 'shared/ui/Button/Button'
import { classNames } from 'shared/lib/classNames/classNames'

interface LangSwitcherProps {
    className?: string
    short?: boolean
}

export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation()

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }
    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ButtonType.BACKGROUND_INVERTED}
            onClick={toggleLanguage}
        >
            {t(short ? 'LangAbbreviation' : 'Language')}
        </Button>
    )
}
