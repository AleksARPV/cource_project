import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '@/app/providers/StoreProvider'
import { type ArticleComment } from '@/entities/Comment'

export const fetchCommentsByArticleId = createAsyncThunk<ArticleComment[], string | undefined, ThunkConfig<string>>(
    'articleDetailsComments/fetchCommentsByArticleId',
    async (articleId, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI

        if (!articleId) {
            return rejectWithValue('Error')
        }

        try {
            const response = await extra.api.get<ArticleComment[]>('/comments', {
                params: {
                    articleId,
                    _expand: 'user'
                }
            })

            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (e) {
            return rejectWithValue('ERROR')
        }
    }
)
