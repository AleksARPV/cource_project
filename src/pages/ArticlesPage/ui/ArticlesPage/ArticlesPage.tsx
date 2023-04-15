import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticlesPage.module.scss'
import { memo, useCallback } from 'react'
import { DynamicModuleLoader, type ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articlesPageReducer } from '../../model/slices/articlePageSlice'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Page } from 'widgets/Page/Page'
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import { ArticlesPageFilter } from 'pages/ArticlesPage/ui/ArticlesPageFilter/ArticlesPageFilter'
import { ArticleInfiniteList } from 'pages/ArticlesPage/ui/ArticleInfiniteList/ArticleInfiniteList'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { initArticlesPage } from 'pages/ArticlesPage/model/services/initArticlesPage/initArticlesPage'
import { useSearchParams } from 'react-router-dom'

interface ArticlesPageProps {
    className?: string
}

const reducers: ReducerList = {
    articlesPage: articlesPageReducer
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props
    const dispatch = useAppDispatch()
    const [searchParams] = useSearchParams()

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage())
    }, [dispatch])

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams))
    })

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.ArticlesPage, {}, [className])}
            >
                <ArticlesPageFilter/>
                <ArticleInfiniteList className={cls.list}/>
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticlesPage)
