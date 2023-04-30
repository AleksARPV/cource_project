import { classNames, type Mods } from '@/shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next'
import { Text, TextAlign, TextType } from '@/shared/ui/Text/Text'
import { CustomInput } from '@/shared/ui/CustomInput/CustomInput'
import { type ProfileInterface } from '../../model/types/profile'
import { Loader } from '@/shared/ui/Loader/Loader'
import { Avatar } from '@/shared/ui/Avatar/Avatar'
import { type Currency, CurrencySelect } from '@/entities/Currency'
import { type Country, CountrySelect } from '@/entities/Country'
import { HStack, VStack } from '@/shared/ui/Stack'

interface ProfileCardProps {
    className?: string
    data?: ProfileInterface
    error?: string
    isLoading?: boolean
    onChangeLastname?: (value?: string) => void
    onChangeFirstname?: (value?: string) => void
    onChangeCity?: (value?: string) => void
    onChangeAge?: (value?: string) => void
    onChangeAvatar?: (value?: string) => void
    onChangeUsername?: (value?: string) => void
    onChangeCurrency?: (currency?: Currency) => void
    onChangeCountry?: (country?: Country) => void
    readonly?: boolean
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeLastname,
        onChangeFirstname,
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
        onChangeUsername,
        onChangeCountry,
        onChangeCurrency
    } = props
    const { t } = useTranslation('profile')
    const mods: Mods = {
        [cls.edit]: !readonly
    }

    if (isLoading) {
        return (
            <HStack justify='center' max className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                <Loader/>
            </HStack>
        )
    }

    if (error) {
        return (
            <HStack justify='center' max className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    title={t('Something went wrong!')}
                    text={t('Please refresh the page')}
                    theme={TextType.ERROR}
                    align={TextAlign.CENTER}
                />
            </HStack>
        )
    }

    return (
        <VStack gap='16' max className={classNames(cls.ProfileCard, mods, [className])}>
            {data?.avatar &&
                <HStack justify='center' max>
                    <Avatar src={data?.avatar}/>
                </HStack>
            }
            <CustomInput
                value={data?.firstname}
                placeholder={t('Your firstname')}
                onChange={onChangeFirstname}
                readonly={readonly}
                data-testid='ProfileCard.Firstname'
            />
            <CustomInput
                value={data?.lastname}
                placeholder={t('Your lastname')}
                onChange={onChangeLastname}
                readonly={readonly}
                data-testid='ProfileCard.Lastname'
            />
            <CustomInput
                value={data?.age}
                placeholder={t('Your age')}
                onChange={onChangeAge}
                readonly={readonly}
                onKeyPress={(e) => {
                    if (!/[0-9]/.test(e.key)) {
                        e.preventDefault()
                    }
                }}
            />
            <CustomInput
                value={data?.city}
                placeholder={t('Your city')}
                onChange={onChangeCity}
                readonly={readonly}
            />
            <CustomInput
                value={data?.username}
                placeholder={t('Your Username')}
                onChange={onChangeUsername}
                readonly={readonly}
            />
            <CustomInput
                value={data?.avatar}
                placeholder={t('Your avatar link')}
                onChange={onChangeAvatar}
                readonly={readonly}
            />
            <CurrencySelect
                value={data?.currency}
                className={cls.select}
                onChange={onChangeCurrency}
                readonly={readonly}
            />
            <CountrySelect
                value={data?.country}
                className={cls.select}
                onChange={onChangeCountry}
                readonly={readonly}
            />
        </VStack>
    )
}
