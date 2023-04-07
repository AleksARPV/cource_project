import { classNames } from 'shared/lib/classNames/classNames'
import { Text } from 'shared/ui/Text/Text'
import { Button, ButtonType } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getProfileData, getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile'
import { useCallback } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getUserAuthData } from 'entities/User'
import { HStack } from 'shared/ui/Stack/HStack/HStack'

interface ProfilePageHeaderProps {
    className?: string
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile')
    const dispatch = useAppDispatch()
    const authData = useSelector(getUserAuthData)
    const profileData = useSelector(getProfileData)
    const whetherCanEdit = authData?.id === profileData?.id
    const readonly = useSelector(getProfileReadonly)

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false))
    }, [dispatch])

    const cancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit())
    }, [dispatch])

    const onSave = useCallback(() => {
        dispatch(updateProfileData())
    }, [dispatch])

    return (
        <HStack max justify='between' className={classNames('', {}, [className])}>
            <Text title={t('User Profile')}/>
            {whetherCanEdit && (
                <div>
                    {readonly
                        ? <Button onClick={onEdit} theme={ButtonType.OUTLINE}>
                            {t('Edit')}
                        </Button>
                        : <HStack gap='16'>
                            <Button onClick={cancelEdit} theme={ButtonType.OUTLINE_RED}>
                                {t('Cancel')}
                            </Button>
                            <Button onClick={onSave} theme={ButtonType.OUTLINE}>
                                {t('Save')}
                            </Button>
                        </HStack>
                    }
                </div>
            )}
        </HStack>
    )
}
