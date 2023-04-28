import { classNames } from '@/shared/lib/classNames/classNames'
import { Card } from '@/shared/ui/Card/Card'
import { memo, useCallback, useState } from 'react'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text/Text'
import { StarRating } from '@/shared/ui/StarRating/StarRating'
import { Modal } from '@/shared/ui/Modal/Modal'
import { CustomInput } from '@/shared/ui/CustomInput/CustomInput'
import { useTranslation } from 'react-i18next'
import { Button, ButtonType } from '@/shared/ui/Button/Button'
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice'
import { Drawer } from '@/shared/ui/Drawer/Drawer'

interface RatingCardProps {
    className?: string
    title?: string
    feedbackTitle?: string
    hasFeedback?: boolean
    onCancel?: (starsCount: number) => void
    onAccept?: (starsCount: number, feedback?: string) => void
    rate?: number
}

export const RatingCard = memo((props: RatingCardProps) => {
    const { className, feedbackTitle, hasFeedback, title, onCancel, onAccept, rate = 0 } = props
    const { t } = useTranslation()
    const isMobile = useDevice()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [starsCount, setStarsCount] = useState(rate)
    const [feedback, setFeedback] = useState('')

    const onSelectStars = useCallback((selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount)
        if (hasFeedback) {
            setIsModalOpen(true)
        } else {
            onAccept?.(selectedStarsCount)
        }
    }, [hasFeedback, onAccept])

    const acceptHandler = useCallback(() => {
        setIsModalOpen(false)
        onAccept?.(starsCount, feedback)
    }, [feedback, onAccept, starsCount])

    const cancelHandler = useCallback(() => {
        setIsModalOpen(false)
        onCancel?.(starsCount)
    }, [onCancel, starsCount])

    const modalBrowserContent = (
        <Modal isOpen={isModalOpen} lazy>
            <VStack max gap={'32'}>
                <Text title={feedbackTitle}/>
                <CustomInput value={feedback} onChange={setFeedback} placeholder={t('Please give us your feedback')}/>
                <HStack max gap={'16'} justify={'end'}>
                    <Button onClick={cancelHandler} theme={ButtonType.OUTLINE_RED}>
                        {t('Close')}
                    </Button>
                    <Button onClick={acceptHandler}>
                        {t('Send')}
                    </Button>
                </HStack>
            </VStack>
        </Modal>
    )

    const modalMobileContent = (
        <Drawer isOpen={isModalOpen} onClose={cancelHandler} lazy>
            <VStack max gap={'32'}>
                <Text title={feedbackTitle}/>
                <CustomInput value={feedback} onChange={setFeedback} placeholder={t('Please give us your feedback')}/>
                <Button fullWidth onClick={acceptHandler}>
                    {t('Send')}
                </Button>
            </VStack>
        </Drawer>
    )

    return (
        <Card max className={classNames('', {}, [className])}>
            <VStack align={'center'} gap={'8'}>
                <Text title={starsCount ? t('Your rating') : title}/>
                <StarRating selectedStars={starsCount} size={40} onSelect={onSelectStars}/>
            </VStack>
            {isMobile ? modalMobileContent : modalBrowserContent}
        </Card>
    )
})
