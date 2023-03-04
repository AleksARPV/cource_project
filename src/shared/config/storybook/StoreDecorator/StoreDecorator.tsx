import { type Story } from '@storybook/react'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { loginReducer } from 'features/AuthByUserName/model/slice/loginSlice'
import { profileReducer } from 'entities/Profile'
import { type ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

const defaultReducers: ReducerList = {
    loginForm: loginReducer,
    profile: profileReducer
}

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducerList
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultReducers, ...asyncReducers }}>
        <StoryComponent/>
    </StoreProvider>
)
