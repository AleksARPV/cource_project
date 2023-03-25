import { classNames } from 'shared/lib/classNames/classNames'
import { memo } from 'react'
import cls from './CommentList.module.scss'
import { type ArticleComment } from '../../model/types/articleComment'
import { Text } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { CommentCard } from '../CommentCard/CommentCard'

interface CommentListProps {
    className?: string
    comments?: ArticleComment[]
    isLoading?: boolean
}

export const CommentList = memo((props: CommentListProps) => {
    const { className, comments, isLoading } = props
    const { t } = useTranslation('article')

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentList, {}, [className])}>
                <CommentCard isLoading={true}/>
                <CommentCard isLoading={true}/>
                <CommentCard isLoading={true}/>
            </div>
        )
    }

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length
                ? comments.map(comment => (
                    <CommentCard className={cls.comment} isLoading={isLoading} key={comment.id} comment={comment}/>
                ))
                : <Text text={t('There are no comments yet')}/>}
        </div>
    )
})
