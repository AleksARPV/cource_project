import { classNames } from '@/shared/lib/classNames/classNames'
import { memo, useCallback } from 'react'
import cls from './AddCommentForm.module.scss'
import { CustomInput } from '@/shared/ui/CustomInput'
import { useTranslation } from 'react-i18next'
import { Button, ButtonType } from '@/shared/ui/Button'
import { useSelector } from 'react-redux'
import { getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/addCommentFormSlice'
import { DynamicModuleLoader, type ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { HStack } from '@/shared/ui/Stack'

export interface AddCommentFormProps {
    className?: string
    onSendComment: (text: string) => void
}

const reducer: ReducerList = {
    addCommentForm: addCommentFormReducer
}

const AddCommentForm = memo((props: AddCommentFormProps) => {
    const { className, onSendComment } = props
    const { t } = useTranslation('comment')
    const text = useSelector(getAddCommentFormText)
    // const error = useSelector(getAddCommentFormError)
    const dispatch = useAppDispatch()

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value))
    }, [dispatch])

    const onSendHandler = useCallback(() => {
        onSendComment(text || '')
        onCommentTextChange('')
    }, [onCommentTextChange, onSendComment, text])

    return (
        <DynamicModuleLoader reducers={reducer}>
            <HStack max justify='between' className={classNames(cls.AddCommentForm, {}, [className])}>
                <CustomInput
                    className={cls.input}
                    placeholder={t('Enter your comments')}
                    value={text}
                    onChange={onCommentTextChange}
                />
                <Button onClick={onSendHandler} theme={ButtonType.OUTLINE}>{t('Send')}</Button>
            </HStack>
        </DynamicModuleLoader>
    )
})

export default AddCommentForm
