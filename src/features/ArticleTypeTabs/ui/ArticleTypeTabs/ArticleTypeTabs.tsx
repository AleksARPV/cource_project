import { classNames } from '@/shared/lib/classNames/classNames'
import { memo, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { type TabItem, Tabs } from '@/shared/ui/Tabs'
import { ArticleType } from '@/entities/Article'

interface ArticleTypeTabsProps {
    className?: string
    value: ArticleType
    onChangeType: (type: ArticleType) => void
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const { className, value, onChangeType } = props
    const { t } = useTranslation('article')
    const typeTabs = useMemo<TabItem[]>(() => [
        {
            value: ArticleType.ALL,
            content: t('All')
        },
        {
            value: ArticleType.IT,
            content: t('IT')
        },
        {
            value: ArticleType.ECONOMICS,
            content: t('Economics')
        },
        {
            value: ArticleType.SCIENCE,
            content: t('Science')
        }
    ], [t])

    const onTabClick = useCallback((tab: TabItem) => {
        onChangeType(tab.value as ArticleType)
    }, [onChangeType])

    return (
        <Tabs
            className={classNames('', {}, [className])}
            onTabClick={onTabClick}
            tabs={typeTabs}
            value={value}
        />
    )
})
