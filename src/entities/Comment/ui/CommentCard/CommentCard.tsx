import { classNames } from 'shared/lib/classNames/classNames'
import { memo } from 'react'
import cls from './CommentCard.module.scss'
import { type ArticleComment } from '../../model/types/articleComment'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Text } from 'shared/ui/Text/Text'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

interface CommentCardProps {
    className?: string
    comment?: ArticleComment
    isLoading?: boolean
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className, cls.loading])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border={'50%'} className={cls.username}/>
                    <Skeleton height={16} width={100}/>
                </div>
                <Skeleton className={cls.text} width={'80%'} height={50}/>
            </div>
        )
    }

    if (!comment) {
        return null
    }

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <AppLink to={`${RoutePath.profile}${comment.user.id}`} className={cls.header}>
                {comment.user.avatar ? <Avatar size={30} className={cls.username} src={comment.user.avatar}/> : null}
                <Text title={comment.user.username}/>
            </AppLink>
            <Text text={comment.text} className={cls.text}/>
        </div>
    )
})