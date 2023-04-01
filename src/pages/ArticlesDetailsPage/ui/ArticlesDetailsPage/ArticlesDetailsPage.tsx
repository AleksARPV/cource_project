import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticlesDetailsPage.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { ArticleDetails, ArticleList } from 'entities/Article'
import { useNavigate, useParams } from 'react-router-dom'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { CommentList } from 'entities/Comment'
import { DynamicModuleLoader, type ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getArticleCommentsIsLoading } from '../../model/selectors/commentsSelectors'
import { AddCommentForm } from 'features/AddCommentForm'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { Button, ButtonType } from 'shared/ui/Button/Button'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { Page } from 'widgets/Page/Page'
import { getArticleRecommendations } from '../../model/slices/articleDetailsPageRecommendationSlice'
import { getArticleRecommendationsIsLoading } from '../../model/selectors/recommendationsSelectors'
import { fetchArticleRecommendations } from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations'
import { articleDetailsPageReducer } from '../../model/slices'

interface ArticlesDetailsPageProps {
    className?: string
}

const reducer: ReducerList = {
    articleDetailsPage: articleDetailsPageReducer
}

const ArticlesDetailsPage = ({ className }: ArticlesDetailsPageProps) => {
    const { t } = useTranslation('article')
    const { id } = useParams<{ id: string }>()
    const dispatch = useAppDispatch()
    const comments = useSelector(getArticleComments.selectAll)
    const recommendations = useSelector(getArticleRecommendations.selectAll)
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading)
    const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading)
    const navigate = useNavigate()

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text))
    }, [dispatch])

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles)
    }, [navigate])

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id))
        dispatch(fetchArticleRecommendations())
    })

    if (!id) {
        return (
            <Page className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
                {t('Article is not found')}
            </Page>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducer} removeAfterUnmount={true}>
            <Page className={classNames(cls.ArticlesDetailsPage, {}, [className])}>
                <Button theme={ButtonType.OUTLINE} onClick={onBackToList}>{t('Back to article list')}</Button>
                <ArticleDetails id={id}/>
                <Text size={TextSize.L} className={cls.commentTitle} title={t('Recommending')}/>
                <ArticleList
                    className={cls.recommendations}
                    articles={recommendations}
                    isLoading={recommendationsIsLoading}
                    target='_blank'
                />
                <Text size={TextSize.L} className={cls.commentTitle} title={t('Comments')}/>
                <AddCommentForm onSendComment={onSendComment}/>
                <CommentList isLoading={commentsIsLoading} comments={comments}/>
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticlesDetailsPage)
