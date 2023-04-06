import { classNames } from 'shared/lib/classNames/classNames'
import { memo, useCallback, useEffect } from 'react'
import cls from './ArticleDetails.module.scss'
import { DynamicModuleLoader, type ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { useSelector } from 'react-redux'
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading
} from '../../model/selectors/articleDetailsSelectors'
import { useTranslation } from 'react-i18next'
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import EyeIcon from 'shared/assets/icons/eye.svg'
import CalendarIcon from 'shared/assets/icons/calendar.svg'
import { Icon } from 'shared/ui/Icon/Icon'
import { type ArticleBlock, ArticleBlockType } from '../../model/types/article'
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'

interface ArticleDetailsProps {
    className?: string
    id: string
}

const reducer: ReducerList = {
    articleDetails: articleDetailsReducer
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { className, id } = props
    const dispatch = useAppDispatch()
    const isLoading = useSelector(getArticleDetailsIsLoading)
    const article = useSelector(getArticleDetailsData)
    const error = useSelector(getArticleDetailsError)
    const { t } = useTranslation('article')

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return <ArticleCodeBlockComponent key={block.id} className={cls.block} block={block}/>
        case ArticleBlockType.IMAGE:
            return <ArticleImageBlockComponent key={block.id} className={cls.block} block={block}/>
        case ArticleBlockType.TEXT:
            return <ArticleTextBlockComponent key={block.id} className={cls.block} block={block}/>
        default:
            return null
        }
    }, [])

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id))
        }
    }, [dispatch, id])

    let content

    if (isLoading) {
        content = (
            <>
                <Skeleton className={cls.avatar} width={150} height={150} border={'50%'}/>
                <Skeleton className={cls.title} width={300} height={24}/>
                <Skeleton className={cls.skeleton} width={600} height={30}/>
                <Skeleton className={cls.skeleton} width={'100%'} height={300}/>
                <Skeleton className={cls.skeleton} width={'100%'} height={300}/>
            </>
        )
    } else if (error) {
        content = (
            <Text align={TextAlign.CENTER} title={t('Error occurred due article loading')}/>
        )
    } else {
        content = (
            <>
                <div className={cls.avatarWrapper}>
                    <Avatar size={200} src={article?.img} className={cls.avatar}/>
                </div>
                <Text size={TextSize.L} className={cls.title} title={article?.title} text={article?.subtitle}/>
                <div className={cls.articleInfo}>
                    <Icon Svg={EyeIcon} className={cls.icons}/>
                    <Text text={String(article?.views)}/>
                </div>
                <div className={cls.articleInfo}>
                    <Icon Svg={CalendarIcon} className={cls.icons}/>
                    <Text text={article?.createdAt}/>
                </div>
                {article?.blocks.map(renderBlock)}
            </>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducer} removeAfterUnmount={true}>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    )
})
