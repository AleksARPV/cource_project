import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { type Currency } from 'entities/Currency'
import { type Country } from 'entities/Country'
import { Text, TextType } from 'shared/ui/Text/Text'
import { VStack } from 'shared/ui/Stack'
import { getProfileFormData } from '../../model/selectors/getProfileFormData/getProfileFormData'
import { getProfileLoading } from '../../model/selectors/getProfileLoading/getProfileLoading'
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError'
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly'
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors'
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData'
import { ValidateProfileError } from '../../model/types/EditableProfileCardSchema'
import { profileActions, profileReducer } from '../../model/slice/profileSlice'
import { ProfileCard } from 'entities/Profile'
import { DynamicModuleLoader, type ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader'

interface EditableProfileCardProps {
    className?: string
    id: string
}

const reducers: ReducerList = {
    profile: profileReducer
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const { className, id } = props
    const { t } = useTranslation('profile')
    const dispatch = useAppDispatch()
    const formData = useSelector(getProfileFormData)
    const isLoading = useSelector(getProfileLoading)
    const error = useSelector(getProfileError)
    const readonly = useSelector(getProfileReadonly)
    const validateErrors = useSelector(getProfileValidateErrors)

    const validateErrorTranslates = {
        [ValidateProfileError.SERVER_ERROR]: t('Server error'),
        [ValidateProfileError.NO_DATA]: t('Data is missed'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Incorrect country'),
        [ValidateProfileError.INCORRECT_AGE]: t('Incorrect age'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Please enter your firstname and lastname')
    }
    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id))
        }
    })

    const onChangeFirstname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ firstname: value || '' }))
    }, [dispatch])

    const onChangeLastname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ lastname: value || '' }))
    }, [dispatch])

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ city: value || '' }))
    }, [dispatch])

    const onChangeAge = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ age: Number(value || 0) }))
    }, [dispatch])

    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ username: value || '' }))
    }, [dispatch])

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value || '' }))
    }, [dispatch])

    const onChangeCurrency = useCallback((currency?: Currency) => {
        dispatch(profileActions.updateProfile({ currency }))
    }, [dispatch])

    const onChangeCountry = useCallback((country?: Country) => {
        dispatch(profileActions.updateProfile({ country }))
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <VStack gap='16' max className={classNames('', {}, [className])}>
                <EditableProfileCardHeader/>
                {validateErrors?.length && validateErrors.map(err => (
                    <Text key={err} theme={TextType.ERROR} text={validateErrorTranslates[err]}/>
                ))}
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    readonly={readonly}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </VStack>
        </DynamicModuleLoader>
    )
})
