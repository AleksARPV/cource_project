import { classNames } from '@/shared/lib/classNames/classNames'
import { memo, useCallback, useEffect } from 'react'
import cls from './ArticleDetails.module.scss'
import { DynamicModuleLoader, type ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { useSelector } from 'react-redux'
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading
} from '../../model/selectors/articleDetailsSelectors'
import { useTranslation } from 'react-i18next'
import { Text, TextAlign, TextSize } from '@/shared/ui/Text/Text'
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton'
import { Avatar } from '@/shared/ui/Avatar/Avatar'
import EyeIcon from '@/shared/assets/icons/eye.svg'
import CalendarIcon from '@/shared/assets/icons/calendar.svg'
import { Icon } from '@/shared/ui/Icon/Icon'
import { type ArticleBlock } from '../../model/types/article'
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import { HStack, VStack } from '@/shared/ui/Stack'
import { ArticleBlockType } from '../../model/consts/constsArticle'

interface ArticleDetailsProps {
    className?: string
    id?: string
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
            return <ArticleCodeBlockComponent key={block.id} block={block}/>
        case ArticleBlockType.IMAGE:
            return <ArticleImageBlockComponent key={block.id} block={block}/>
        case ArticleBlockType.TEXT:
            return <ArticleTextBlockComponent key={block.id} block={block}/>
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
            <VStack gap='8' max>
                <Skeleton className={cls.avatar} width={150} height={150} border={'50%'}/>
                <Skeleton width={300} height={24}/>
                <Skeleton width={600} height={30}/>
                <Skeleton width={'100%'} height={300}/>
                <Skeleton width={'100%'} height={300}/>
            </VStack>
        )
    } else if (error) {
        content = (
            <Text align={TextAlign.CENTER} title={t('Error occurred due article loading')}/>
        )
    } else {
        content = (
            <>
                <HStack justify='center' max>
                    <Avatar size={200} src={article?.img} className={cls.avatar}/>
                </HStack>
                <VStack gap='8'>
                    <Text size={TextSize.L} title={article?.title} text={article?.subtitle}/>
                    <HStack gap='8'>
                        <Icon Svg={EyeIcon}/>
                        <Text text={String(article?.views)}/>
                    </HStack>
                    <HStack gap='8'>
                        <Icon Svg={CalendarIcon}/>
                        <Text text={article?.createdAt}/>
                    </HStack>
                </VStack>

                {article?.blocks.map(renderBlock)}
            </>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducer} removeAfterUnmount={true}>
            <VStack gap='16' max className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </VStack>
        </DynamicModuleLoader>
    )
})
