import { type Story } from '@storybook/react'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { loginReducer } from 'features/AuthByUserName/model/slice/loginSlice'
import { profileReducer } from 'entities/Profile'
import { type ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice'
import { addCommentFormReducer } from 'features/AddCommentForm/model/slices/addCommentFormSlice'
import { articleDetailsPageReducer } from 'pages/ArticlesDetailsPage/model/slices'

const defaultReducers: ReducerList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsPageReducer
}

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducerList
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultReducers, ...asyncReducers }}>
        <StoryComponent/>
    </StoreProvider>
)
