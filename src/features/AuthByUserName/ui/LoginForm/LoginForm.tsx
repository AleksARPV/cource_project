import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ButtonType } from 'shared/ui/Button/Button'
import { CustomInput } from 'shared/ui/CustomInput/CustomInput'
import { useSelector } from 'react-redux'
import { memo, useCallback } from 'react'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { loginByUsername } from '../../services/loginByUsername/loginByUsername'
import { Text, TextType } from 'shared/ui/Text/Text'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginLoader } from '../../model/selectors/getLoginLoader/getLoginLoader'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { DynamicModuleLoader, type ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

export interface LoginFormProps {
    className?: string
    onSuccess: () => void
}

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const username = useSelector(getLoginUsername)
    const password = useSelector(getLoginPassword)
    const isLoading = useSelector(getLoginLoader)
    const error = useSelector(getLoginError)
    const initialReducers: ReducerList = {
        loginForm: loginReducer
    }

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])
    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])
    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }))
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess()
        }
    }, [onSuccess, dispatch, password, username])

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t('Authorization')}/>
                <CustomInput
                    autofocus
                    placeholder={t('Enter Username')}
                    className={cls.input}
                    type='text'
                    onChange={onChangeUsername}
                    value={username}
                />
                <CustomInput
                    placeholder={t('Enter Password')}
                    className={cls.input}
                    type='text'
                    onChange={onChangePassword}
                    value={password}
                />
                {error && <div className={cls.errorContainer}>
                    <Text text={t('Wrong Username or Password')} theme={TextType.ERROR}/>
                    <Button
                        onClick={onLoginClick}
                        theme={ButtonType.OUTLINE}
                        className={cls.loginBtn}
                        disabled={isLoading}
                    >
                        {t('Login')}
                    </Button>
                </div>}
                {!error && <Button
                    onClick={onLoginClick}
                    theme={ButtonType.OUTLINE}
                    className={cls.loginBtn}
                    disabled={isLoading}
                >
                    {t('Login')}
                </Button>}

            </div>
        </DynamicModuleLoader>
    )
})

export default LoginForm
