import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ProfilePageHeader.module.scss'
import { Text } from 'shared/ui/Text/Text'
import { Button, ButtonType } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile'
import { useCallback } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

interface ProfilePageHeaderProps {
    className?: string
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile')
    const dispatch = useAppDispatch()

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
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('User Profile')}/>
            {readonly
                ? <Button onClick={onEdit} className={cls.editBtn} theme={ButtonType.OUTLINE}>
                    {t('Edit')}
                </Button>
                : <div>
                    <Button onClick={cancelEdit} className={cls.editBtn} theme={ButtonType.OUTLINE_RED}>
                        {t('Cancel')}
                    </Button>
                    <Button onClick={onSave} className={cls.saveBtn} theme={ButtonType.OUTLINE}>
                        {t('Save')}
                    </Button>
                </div>
            }
        </div>
    )
}
