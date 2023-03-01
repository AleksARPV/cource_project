import { type FC, lazy } from 'react'
import { type LoginFormProps } from 'features/AuthByUserName/ui/LoginForm/LoginForm'

export const LoginFormAsync = lazy<FC<LoginFormProps>>(async () => await import('./LoginForm'))
