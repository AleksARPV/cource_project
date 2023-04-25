import { type EntityState } from '@reduxjs/toolkit'
import { type Article } from '@/entities/Article'

export interface ArticleDetailsRecommendationSchema extends EntityState<Article> {
    isLoading?: boolean
    error?: string
}
