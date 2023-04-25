import { classNames } from '@/shared/lib/classNames/classNames'
import { memo, useCallback } from 'react'
import cls from './ArticlesPageFilter.module.scss'
import {
    type ArticleSortField,
    ArticleSortSelector,
    type ArticleType,
    ArticleTypeTabs,
    ArticleView,
    ArticleViewSelector
} from '@/entities/Article'
import { articlesPageActions } from '../../model/slices/articlePageSlice'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import {
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
    getArticlesPageView
} from '../../model/selectors/articlesPageSelectors'
import { useTranslation } from 'react-i18next'
import { Card } from '@/shared/ui/Card/Card'
import { CustomInput } from '@/shared/ui/CustomInput/CustomInput'
import { type SortOrder } from '@/shared/types'
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList'
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce'

interface ArticlesPageFilterProps {
    className?: string
}

export const ArticlesPageFilter = memo((props: ArticlesPageFilterProps) => {
    const { className } = props
    const { t } = useTranslation('article')
    const dispatch = useAppDispatch()
    const view = useSelector(getArticlesPageView)
    const sort = useSelector(getArticlesPageSort)
    const order = useSelector(getArticlesPageOrder)
    const search = useSelector(getArticlesPageSearch)
    const type = useSelector(getArticlesPageType)

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }))
    }, [dispatch])

    const debouncedFetchData = useDebounce(fetchData, 500)

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view))
    }, [dispatch])

    const onChangeSort = useCallback((newSort: ArticleSortField) => {
        dispatch(articlesPageActions.setSort(newSort))
        dispatch(articlesPageActions.setPage(1))
        fetchData()
    }, [dispatch, fetchData])

    const onChangeOrder = useCallback((newOrder: SortOrder) => {
        dispatch(articlesPageActions.setOrder(newOrder))
        dispatch(articlesPageActions.setPage(1))
        fetchData()
    }, [dispatch, fetchData])

    const onChangeSearch = useCallback((search: string) => {
        dispatch(articlesPageActions.setSearch(search))
        dispatch(articlesPageActions.setPage(1))
        debouncedFetchData()
    }, [dispatch, debouncedFetchData])

    const onChangeType = useCallback((value: ArticleType) => {
        dispatch(articlesPageActions.setType(value))
        dispatch(articlesPageActions.setPage(1))
        fetchData()
    }, [dispatch, fetchData])

    return (
        <div className={classNames(cls.ArticlesPageFilter, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    sort={sort}
                    order={order}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector view={view || ArticleView.SMALL} onViewClick={onChangeView}/>
            </div>
            <Card className={cls.search}>
                <CustomInput value={search} onChange={onChangeSearch} placeholder={t('Search')}/>
            </Card>
            <ArticleTypeTabs value={type} onChangeType={onChangeType} className={cls.tabs}/>
        </div>
    )
})
