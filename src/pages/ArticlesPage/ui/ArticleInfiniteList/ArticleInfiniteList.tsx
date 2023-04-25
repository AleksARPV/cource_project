import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { ArticleList } from '@/entities/Article'
import { useSelector } from 'react-redux'
import { getArticles } from '../../model/slices/articlePageSlice'
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView
} from '../../model/selectors/articlesPageSelectors'
import { Text } from '@/shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'

interface ArticleInfiniteListProps {
    className?: string
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
    const { className } = props
    const articles = useSelector(getArticles.selectAll)
    const isLoading = useSelector(getArticlesPageIsLoading)
    const error = useSelector(getArticlesPageError)
    const view = useSelector(getArticlesPageView)
    const { t } = useTranslation('article')

    if (error) {
        return <Text title={t('Error occurred due article loading')}/>
    }

    return (
        <div className={classNames('', {}, [className])}>
            <ArticleList
                isLoading={isLoading}
                view={view}
                articles={articles}
                className={className}
            />
        </div>
    )
})
