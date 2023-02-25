import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ButtonType } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { memo, useCallback } from 'react'
import { loginActions } from '../../model/slice/loginSlice'
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'
import { loginByUsername } from '../../services/loginByUsername/loginByUsername'
import { Text, TextType } from 'shared/ui/Text/Text'

interface LoginFormProps {
    className?: string
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const { username, password, error, isLoading } = useSelector(getLoginState)

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])
    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])
    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }))
    }, [dispatch, password, username])

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Authorization')}/>
            <Input
                autofocus
                placeholder={t('Enter Username')}
                className={cls.input}
                type='text'
                onChange={onChangeUsername}
                value={username}
            />
            <Input
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
    )
})
