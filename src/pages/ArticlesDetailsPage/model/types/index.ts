import { type ArticleDetailsCommentsSchema } from './ArticleDetailsCommentsSchema'
import { type ArticleDetailsRecommendationSchema } from './ArticleDetailsRecommendationSchema'

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentsSchema
    recommendations: ArticleDetailsRecommendationSchema
}
