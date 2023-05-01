import { classNames } from '@/shared/lib/classNames/classNames'
import { memo, useCallback } from 'react'
import { RatingCard } from '@/entities/Rating'
import { useTranslation } from 'react-i18next'
import { useArticleRating, useRateArticle } from '../../api/ArticleRatingApi'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'
import { Skeleton } from '@/shared/ui/Skeleton'

export interface ArticleRatingProps {
    className?: string
    articleId: string
}

const ArticleRating = memo((props: ArticleRatingProps) => {
    const { className, articleId } = props
    const { t } = useTranslation('article')
    const userData = useSelector(getUserAuthData)
    const { data, isLoading } = useArticleRating({
        articleId,
        userId: userData?.id ?? ''
    })

    const [rateArticleMutation] = useRateArticle()

    const rating = data?.[0]

    const rateArticleHandler = useCallback((starsCount: number, feedback?: string) => {
        try {
            rateArticleMutation({
                userId: userData?.id ?? '',
                articleId,
                rate: starsCount,
                feedback
            })
        } catch (e) {
            console.log(e)
        }
    }, [articleId, rateArticleMutation, userData?.id])

    const onCancel = useCallback((starsCount: number) => {
        rateArticleHandler(starsCount)
    }, [rateArticleHandler])

    const onAccept = useCallback((starsCount: number, feedback?: string) => {
        rateArticleHandler(starsCount, feedback)
    }, [rateArticleHandler])

    if (isLoading) {
        return <Skeleton width={'100%'} height={120}/>
    }

    return (
        <RatingCard
            onAccept={onAccept}
            onCancel={onCancel}
            rate={rating?.rate}
            className={classNames('', {}, [className])}
            title={t('Rate the article')}
            feedbackTitle={t('Please let us know your opinion, it will help us to improve')}
            hasFeedback
        />
    )
})

export default ArticleRating
