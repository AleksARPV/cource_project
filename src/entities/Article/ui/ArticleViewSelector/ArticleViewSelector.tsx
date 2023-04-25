import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import cls from './ArticleViewSelector.module.scss'
import PlateIcon from '@/shared/assets/icons/plate.svg'
import BurgerIcon from '@/shared/assets/icons/burger.svg'
import { Button, ButtonType } from '@/shared/ui/Button/Button'
import { Icon } from '@/shared/ui/Icon/Icon'
import { ArticleView } from '../../model/consts/constsArticle'

interface ArticleViewSelectorProps {
    className?: string
    view: ArticleView
    onViewClick?: (view: ArticleView) => void
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: PlateIcon
    },
    {
        view: ArticleView.BIG,
        icon: BurgerIcon
    }
]

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props

    const onClick = (newView: ArticleView) => {
        return () => {
            onViewClick?.(newView)
        }
    }

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((item) => (
                <Button
                    key={item.view}
                    theme={ButtonType.CLEAR}
                    onClick={onClick(item.view)}
                >
                    <Icon
                        Svg={item.icon}
                        className={classNames(cls.icons, { [cls.notSelected]: item.view !== view })}
                    />
                </Button>
            ))}
        </div>
    )
})
