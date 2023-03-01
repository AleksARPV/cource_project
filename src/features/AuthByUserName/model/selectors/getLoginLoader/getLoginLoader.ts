import { type StateSchema } from 'app/providers/StoreProvider'

export const getLoginLoader = (state: StateSchema) => state?.loginForm?.isLoading || false
