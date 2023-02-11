import { useTranslation } from 'react-i18next'
import React from 'react'
import { CustomButton, ThemeButton } from 'shared/ui/CustomButton/CustomButton'
import { classNames } from 'shared/lib/classNames/classNames'

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation()

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }
    return (
        <CustomButton
            className={classNames('', {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggleLanguage}
        >
            {t('Language')}
        </CustomButton>
    )
}
