import React from 'react'
import { useTranslation } from 'react-i18next'
import { Counter } from 'entities/Counter'

const MainPage = () => {
    const { t } = useTranslation('mainpage')
    return (
        <div>
            {t('Main Page')}
            <Counter/>
        </div>
    )
}

export default MainPage
