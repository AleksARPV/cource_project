import { type CounterSchema } from 'entities/Counter'
import { type UserSchema } from 'entities/User'
import { type LoginSchema } from 'features/AuthByUserName'
import {
    type AnyAction,
    type CombinedState,
    type Dispatch,
    type EnhancedStore,
    type Reducer,
    type ReducersMapObject
} from '@reduxjs/toolkit'
import { type ProfileSchema } from 'entities/Profile'
import { type AxiosInstance } from 'axios'
import { type ArticleDetailsSchema } from 'entities/Article'
import { type ArticleDetailsCommentsSchema } from 'pages/ArticlesDetailsPage'
import { type AddCommentFormSchema } from 'features/AddCommentForm'
import { type ArticlesPageSchema } from 'pages/ArticlesPage'

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema
    loginForm?: LoginSchema
    profile?: ProfileSchema
    articleDetails?: ArticleDetailsSchema
    articleDetailsComments?: ArticleDetailsCommentsSchema
    addCommentForm?: AddCommentFormSchema
    articlesPage?: ArticlesPageSchema
}

export type StateSchemaKey = keyof StateSchema
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove: (key: StateSchemaKey) => void
    getMountedReducers: () => MountedReducers
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
    dispatch?: Dispatch
    state: StateSchema
}
