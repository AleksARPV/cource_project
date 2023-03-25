import { createAsyncThunk } from '@reduxjs/toolkit'
import { getUserAuthData } from 'entities/User'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type ArticleComment } from 'entities/Comment'
import { getArticleDetailsData } from 'entities/Article/model/selectors/articleDetailsSelectors'
import { fetchCommentsByArticleId } from '../../services/fetchCommentsByArticleId/fetchCommentsByArticleId'

export const addCommentForArticle = createAsyncThunk<ArticleComment, string, ThunkConfig<string>>(
    'articleDetails/AddCommentForArticle',
    async (text, thunkAPI) => {
        const { extra, dispatch, rejectWithValue, getState } = thunkAPI

        const userData = getUserAuthData(getState())
        const article = getArticleDetailsData(getState())

        if (!userData || !text || !article) {
            return rejectWithValue('No Data')
        }

        try {
            const response = await extra.api.post<ArticleComment>('/comments', {
                articleId: article.id,
                userId: userData.id,
                text
            })

            if (!response.data) {
                throw new Error()
            }

            dispatch(fetchCommentsByArticleId(article.id))

            return response.data
        } catch (e) {
            return rejectWithValue('ERROR')
        }
    }
)
