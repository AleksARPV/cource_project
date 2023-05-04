import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import cls from './CommentCard.module.scss'
import { type ArticleComment } from '../../model/types/articleComment'
import { Avatar } from '@/shared/ui/Avatar'
import { Text } from '@/shared/ui/Text'
import { Skeleton } from '@/shared/ui/Skeleton'
import { AppLink } from '@/shared/ui/AppLink'
import { VStack } from '@/shared/ui/Stack'
import { getRouteProfile } from '@/shared/const/router'

interface CommentCardProps {
    className?: string
    comment?: ArticleComment
    isLoading?: boolean
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props

    if (isLoading) {
        return (
            <VStack max gap='8' className={classNames(cls.CommentCard, {}, [className, cls.loading])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border={'50%'} className={cls.username}/>
                    <Skeleton height={16} width={100}/>
                </div>
                <Skeleton className={cls.text} width={'80%'} height={50}/>
            </VStack>
        )
    }

    if (!comment) {
        return null
    }

    return (
        <VStack max gap='8' className={classNames(cls.CommentCard, {}, [className])}>
            <AppLink to={getRouteProfile(comment.user.id)} className={cls.header}>
                {comment.user.avatar ? <Avatar size={30} className={cls.username} src={comment.user.avatar}/> : null}
                <Text title={comment.user.username}/>
            </AppLink>
            <Text text={comment.text} className={cls.text}/>
        </VStack>
    )
})
