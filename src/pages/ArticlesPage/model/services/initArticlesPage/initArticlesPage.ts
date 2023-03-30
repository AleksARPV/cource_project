import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { articlesPageActions } from '../../slices/articlePageSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'
import { getArticlesPageIsMounted } from '../../selectors/articlesPageSelectors'

export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/initArticlesPage',
    async (_, thunkAPI) => {
        const { getState, dispatch } = thunkAPI
        const isMounted = getArticlesPageIsMounted(getState())

        if (!isMounted) {
            dispatch(articlesPageActions.initiateState())
            dispatch(fetchArticlesList({ page: 1 }))
        }
    }
)
