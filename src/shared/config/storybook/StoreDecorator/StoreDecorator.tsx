import { type Story } from '@storybook/react'
import { type StateSchema, StoreProvider } from '@/app/providers/StoreProvider'
import { loginReducer } from '@/features/AuthByUserName/model/slice/loginSlice'
import { type ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsReducer } from '@/entities/Article/model/slice/articleDetailsSlice'
import { addCommentFormReducer } from '@/features/AddCommentForm/model/slices/addCommentFormSlice'
import { articleDetailsPageReducer } from '@/pages/ArticlesDetailsPage/model/slices'
import { profileReducer } from '@/features/EditableProfileCard/model/slice/profileSlice'

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
