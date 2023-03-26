import { classNames } from 'shared/lib/classNames/classNames'
import { memo } from 'react'
import cls from './ArticleList.module.scss'
import { type Article, ArticleView } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton'

interface ArticleListProps {
    className?: string
    articles: Article[]
    isLoading?: boolean
    view?: ArticleView
}

const getSkeletons = (view: ArticleView) => {
    return new Array(view === ArticleView.SMALL ? 9 : 3).fill(0).map(
        (item, index) => (<ArticleListItemSkeleton className={cls.card} key={index} view={view}/>)
    )
}

export const ArticleList = memo((props: ArticleListProps) => {
    const { className, articles, view = ArticleView.SMALL, isLoading } = props

    const renderArticle = (article: Article) => {
        return (
            <ArticleListItem key={article.id} article={article} view={view} className={cls.card}/>
        )
    }

    if (isLoading) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                {getSkeletons(view)}
            </div>
        )
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length > 0
                ? articles.map(renderArticle)
                : null
            }
        </div>
    )
})
