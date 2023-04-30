import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import cls from './ArticleEditPage.module.scss'
import { Page } from '@/widgets/Page'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

interface ArticleEditPageProps {
    className?: string
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
    const { className } = props
    const { t } = useTranslation('article')
    const { id } = useParams<{ id: string }>()
    const isEdit = Boolean(id)

    return (
        <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
            {isEdit ? t('Edit article with ID = ') + id : t('Create new article')}
        </Page>
    )
})

export default ArticleEditPage
