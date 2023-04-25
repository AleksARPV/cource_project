import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { type ArticleComment } from '../../model/types/articleComment'
import { Text } from '@/shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { CommentCard } from '../CommentCard/CommentCard'
import { VStack } from '@/shared/ui/Stack'

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
            <VStack gap='16' max className={classNames('', {}, [className])}>
                <CommentCard isLoading={true}/>
                <CommentCard isLoading={true}/>
                <CommentCard isLoading={true}/>
            </VStack>
        )
    }

    return (
        <VStack gap='16' max className={classNames('', {}, [className])}>
            {comments?.length
                ? comments.map(comment => (
                    <CommentCard isLoading={isLoading} key={comment.id} comment={comment}/>
                ))
                : <Text text={t('There are no comments yet')}/>}
        </VStack>
    )
})
