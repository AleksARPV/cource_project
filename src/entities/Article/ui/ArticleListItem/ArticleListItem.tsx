import { classNames } from '@/shared/lib/classNames/classNames'
import { type HTMLAttributeAnchorTarget, memo } from 'react'
import cls from './ArticleListItem.module.scss'
import { type Article, type ArticleTextBlock } from '../../model/types/article'
import { Text } from '@/shared/ui/Text/Text'
import { Icon } from '@/shared/ui/Icon/Icon'
import EyeIcon from '@/shared/assets/icons/eye.svg'
import { Card } from '@/shared/ui/Card/Card'
import { Avatar } from '@/shared/ui/Avatar/Avatar'
import { useTranslation } from 'react-i18next'
import { Button, ButtonType } from '@/shared/ui/Button/Button'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import { AppLink } from '@/shared/ui/AppLink/AppLink'
import { ArticleBlockType, ArticleView } from '../../model/consts/constsArticle'
import { getRouteArticlesDetails } from '@/shared/const/router'
import { AppImage } from '@/shared/ui/AppImage'
import { Skeleton } from '@/shared/ui/Skeleton'

interface ArticleListItemProps {
    className?: string
    article: Article
    view: ArticleView
    target?: HTMLAttributeAnchorTarget
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const { className, article, view, target } = props
    const { t } = useTranslation('article')

    const types = <Text text={article.type.join(', ')} className={cls.types}/>
    const views = (
        <>
            <Text text={String(article.views)} className={cls.views}/>
            <Icon Svg={EyeIcon}/>
        </>
    )

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            block => block.type === ArticleBlockType.TEXT
        ) as ArticleTextBlock
        return (
            <div
                data-testid={'ArticleListItem'}
                className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
            >
                <Card>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar}/>
                        <Text text={article.user.username} className={cls.username}/>
                        <Text text={article.createdAt} className={cls.date}/>
                    </div>
                    <Text title={article.title} className={cls.title}/>
                    {types}
                    <AppImage
                        src={article.img}
                        className={cls.img}
                        alt={article.title}
                        fallback={<Skeleton width={'100%'} height={250}/>}
                    />
                    {textBlock && (
                        <ArticleTextBlockComponent block={textBlock} className={cls.textBlock}/>
                    )}
                    <div className={cls.footer}>
                        <AppLink target={target} to={getRouteArticlesDetails(article.id)}>
                            <Button theme={ButtonType.OUTLINE}>{t('Read more')}</Button>
                        </AppLink>
                        {views}
                    </div>
                </Card>
            </div>
        )
    }

    return (
        <AppLink data-testid={'ArticleListItem'} target={target} to={getRouteArticlesDetails(article.id)}
            className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
        >
            <Card>
                <div className={cls.imgWrapper}>
                    <AppImage
                        src={article.img}
                        alt={article.title}
                        className={cls.img}
                        fallback={<Skeleton width={200} height={200}/>}
                    />
                    <Text text={article.createdAt} className={cls.date}/>
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text text={article.title} className={cls.title}/>
            </Card>
        </AppLink>
    )
})
