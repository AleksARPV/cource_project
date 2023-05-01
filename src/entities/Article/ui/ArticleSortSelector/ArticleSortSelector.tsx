import { classNames } from '@/shared/lib/classNames/classNames'
import { memo, useMemo } from 'react'
import cls from './ArticleSortSelector.module.scss'
import { useTranslation } from 'react-i18next'
import { Select, type SelectOption } from '@/shared/ui/Select'
import { type SortOrder } from '@/shared/types'
import { ArticleSortField } from '../../model/consts/constsArticle'

interface ArticleSortSelectorProps {
    className?: string
    sort: ArticleSortField
    order: SortOrder
    onChangeOrder: (newOrder: SortOrder) => void
    onChangeSort: (newSort: ArticleSortField) => void
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const { className, order, onChangeOrder, onChangeSort, sort } = props
    const { t } = useTranslation('article')

    const sortFieldOptions = useMemo<Array<SelectOption<ArticleSortField>>>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('creation date')
        },
        {
            value: ArticleSortField.TITLE,
            content: t('title')
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('views')
        }
    ], [t])

    const orderOptions = useMemo<Array<SelectOption<SortOrder>>>(() => [
        {
            value: 'asc',
            content: t('increasing order')
        },
        {
            value: 'desc',
            content: t('decreasing order')
        }
    ], [t])

    // const changeSortHandler = useCallback((newSort: string) => {
    //     onChangeSort(newSort as ArticleSortField)
    // }, [onChangeSort])
    //
    // const changeOrderHandler = useCallback((newOrder: string) => {
    //     onChangeOrder(newOrder as SortOrder)
    // }, [onChangeOrder])

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select<ArticleSortField>
                onChange={onChangeSort}
                value={sort}
                options={sortFieldOptions}
                label={t('Sort by')}
            />
            <Select<SortOrder>
                onChange={onChangeOrder}
                value={order}
                options={orderOptions}
                label={t('Sort in')}
                className={cls.order}
            />
        </div>
    )
})
