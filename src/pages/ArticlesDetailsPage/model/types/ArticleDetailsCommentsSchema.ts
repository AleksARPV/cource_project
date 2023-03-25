import { type EntityState } from '@reduxjs/toolkit'
import { type ArticleComment } from 'entities/Comment'

export interface ArticleDetailsCommentsSchema extends EntityState<ArticleComment> {
    isLoading?: boolean
    error?: string
}
