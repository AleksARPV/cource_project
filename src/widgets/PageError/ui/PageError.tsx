import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './PageError.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from '@/shared/ui/Button'

interface PageErrorProps {
    className?: string
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation()
    const reloadPage = () => {
        window.location.reload()
    }

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t('Something went wrong')}</p>
            <Button onClick={reloadPage}>{t('Reload page')}</Button>
        </div>
    )
}
