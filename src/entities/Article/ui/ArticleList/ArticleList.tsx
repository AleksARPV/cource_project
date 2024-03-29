import { classNames } from '@/shared/lib/classNames/classNames'
import { type HTMLAttributeAnchorTarget, memo } from 'react'
import cls from './ArticleList.module.scss'
import { type Article } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../../ui/ArticleListItem/ArticleListItemSkeleton'
import { Text, TextSize } from '@/shared/ui/Text'
import { useTranslation } from 'react-i18next'
import { ArticleView } from '../../model/consts/constsArticle'

interface ArticleListProps {
    className?: string
    articles: Article[]
    isLoading?: boolean
    view?: ArticleView
    target?: HTMLAttributeAnchorTarget
}

const getSkeletons = (view: ArticleView) => {
    return new Array(view === ArticleView.SMALL ? 9 : 3).fill(0).map(
        (item, index) => (<ArticleListItemSkeleton className={cls.card} key={index} view={view}/>)
    )
}

export const ArticleList = memo((props: ArticleListProps) => {
    const { className, articles, view = ArticleView.SMALL, isLoading, target } = props
    const { t } = useTranslation('article')

    const renderArticle = (article: Article) => {
        return (
            <ArticleListItem key={article.id} article={article} view={view} className={cls.card} target={target}/>
        )
    }

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text size={TextSize.L} title={t('Articles no found')}/>
            </div>
        )
    }

    return (
        <div
            data-testid={'ArticleList'}
            className={classNames(cls.ArticleList, {}, [className, cls[view]])}
        >
            {articles.length > 0
                ? articles.map(renderArticle)
                : null
            }
            {isLoading && getSkeletons(view)}
        </div>
    )
})
