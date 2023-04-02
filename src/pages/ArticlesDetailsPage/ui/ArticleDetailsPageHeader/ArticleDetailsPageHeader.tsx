import { classNames } from 'shared/lib/classNames/classNames'
import { memo, useCallback } from 'react'
import cls from './ArticleDetailsPageHeader.module.scss'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { Button, ButtonType } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getCanEditArticle } from '../../model/selectors/articleSelectors'
import { getArticleDetailsData } from 'entities/Article'

interface ArticleDetailsPageHeaderProps {
    className?: string
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
    const { className } = props
    const { t } = useTranslation('article')
    const navigate = useNavigate()
    const canEdit = useSelector(getCanEditArticle)
    const article = useSelector(getArticleDetailsData)

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles)
    }, [navigate])

    const onEditArticle = useCallback(() => {
        navigate(`${RoutePath.articles_details}${article?.id}/edit`)
    }, [article?.id, navigate])

    return (
        <div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
            <Button theme={ButtonType.OUTLINE} onClick={onBackToList}>{t('Back to article list')}</Button>
            {canEdit && <Button
                className={cls.editBtn}
                theme={ButtonType.OUTLINE}
                onClick={onEditArticle}
            >
                {t('Edit')}
            </Button>}
        </div>
    )
})