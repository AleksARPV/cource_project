import { useTranslation } from 'react-i18next'
import React from 'react'
import { ButtonType, CustomButton } from 'shared/ui/CustomButton/CustomButton'
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
        <CustomButton
            className={classNames('', {}, [className])}
            theme={ButtonType.BACKGROUND_INVERTED}
            onClick={toggleLanguage}
        >
            {t(short ? 'LangAbbreviation' : 'Language')}
        </CustomButton>
    )
}
