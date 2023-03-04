import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData'
import { Text } from 'shared/ui/Text/Text'
import { Button, ButtonType } from 'shared/ui/Button/Button'
import { CustomInput } from 'shared/ui/Input/CustomInput'

interface ProfileCardProps {
    className?: string
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation('profile')
    const data = useSelector(getProfileData)
    // const isLoading = useSelector(getProfileLoading)
    // const error = useSelector(getProfileError)
    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('User Profile')}/>
                <Button className={cls.editBtn} theme={ButtonType.OUTLINE}>{t('Edit')}</Button>
            </div>
            <div className={cls.data}>
                <CustomInput
                    value={data?.firstname}
                    placeholder={t('Your firstname')}
                    className={cls.input}
                />
                <CustomInput
                    value={data?.lastname}
                    placeholder={t('Your lastname')}
                    className={cls.input}
                />
            </div>
        </div>
    )
}
