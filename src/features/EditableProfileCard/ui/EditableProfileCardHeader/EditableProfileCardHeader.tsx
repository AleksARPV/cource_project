import { classNames } from 'shared/lib/classNames/classNames'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'
import { HStack } from 'shared/ui/Stack'
import { Text } from 'shared/ui/Text/Text'
import { Button, ButtonType } from 'shared/ui/Button/Button'
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData'
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly'
import { profileActions } from '../../model/slice/profileSlice'
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData'

interface EditableProfileCardHeaderProps {
    className?: string
}

export const EditableProfileCardHeader = memo((props: EditableProfileCardHeaderProps) => {
    const { t } = useTranslation('profile')
    const { className } = props
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
                        ? <Button
                            onClick={onEdit}
                            theme={ButtonType.OUTLINE}
                            data-testid='EditableProfileCardHeader.EditButton'
                        >
                            {t('Edit')}
                        </Button>
                        : <HStack gap='16'>
                            <Button
                                onClick={cancelEdit}
                                theme={ButtonType.OUTLINE_RED}
                                data-testid='EditableProfileCardHeader.CancelButton'
                            >
                                {t('Cancel')}
                            </Button>
                            <Button
                                onClick={onSave}
                                theme={ButtonType.OUTLINE}
                                data-testid='EditableProfileCardHeader.SaveButton'
                            >
                                {t('Save')}
                            </Button>
                        </HStack>
                    }
                </div>
            )}
        </HStack>
    )
})
