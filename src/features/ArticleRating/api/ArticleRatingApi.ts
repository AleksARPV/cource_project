import { rtkApi } from '@/shared/api/rtkApi'
import { RatingTypes } from '@/entities/Rating'

interface GetArticleRatingArg {
    userId: string
    articleId: string
}

interface RateArticleArg {
    userId: string
    articleId: string
    rate: number
    feedback?: string
}

const articleRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRating: build.query<RatingTypes[], GetArticleRatingArg>({
            query: ({ articleId, userId }) => ({
                url: '/article-ratings',
                params: {
                    userId,
                    articleId
                }
            })
        }),
        rateArticle: build.mutation<void, RateArticleArg>({
            query: (arg) => ({
                url: '/article-ratings',
                method: 'POST',
                body: arg
            })
        })
    })
})

export const useArticleRating = articleRatingApi.useGetArticleRatingQuery
export const useRateArticle = articleRatingApi.useRateArticleMutation
