import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import cls from './ArticleImageBlockComponent.module.scss'
import { type ArticleImageBlock } from '../../model/types/article'
import { Text, TextAlign } from '@/shared/ui/Text'

interface ArticleImageBlockComponentProps {
    className?: string
    block: ArticleImageBlock
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
    const { className, block } = props
    return (
        <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
            <img alt={block.title} src={block.src} className={cls.img}/>
            {block.title && <Text text={block.title} align={TextAlign.CENTER}/>}
        </div>
    )
})
