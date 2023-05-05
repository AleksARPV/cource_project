import { classNames } from '@/shared/lib/classNames/classNames'
import { type CSSProperties, useMemo } from 'react'
import cls from './Avatar.module.scss'
import { AppImage } from '../AppImage'
import ProfileDefaultIcon from '../../assets/icons/prof_icon.svg'
import { Icon } from '../Icon'
import { Skeleton } from '../Skeleton'

interface AvatarProps {
    className?: string
    src?: string
    size?: number
    alt?: string
    fallbackInverted?: boolean
}

export const Avatar = ({ className, src, size = 100, alt, fallbackInverted }: AvatarProps) => {
    const styles = useMemo<CSSProperties>(() => {
        return {
            width: size,
            height: size
        }
    }, [size])

    const fallback = <Skeleton width={size} height={size} border={'50%'}/>
    const errorFallback = <Icon inverted={fallbackInverted} width={size} height={size} Svg={ProfileDefaultIcon}/>

    return (
        <AppImage
            alt={alt}
            style={styles}
            src={src}
            className={classNames(cls.Avatar, {}, [className])}
            errorFallback={errorFallback}
            fallback={fallback}
        />
    )
}
