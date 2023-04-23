import { type MutableRefObject, useCallback, useEffect, useRef, useState } from 'react'

interface useModalProps {
    onClose?: () => void
    isOpen?: boolean
    animationDelay: number
}

export function useModal ({ onClose, animationDelay, isOpen }: useModalProps) {
    const [isClosing, setIsClosing] = useState(false)
    const [isMounted, setIsMounted] = useState(false)
    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true)
        }
    }, [isOpen])

    const close = useCallback(() => {
        if (onClose) {
            setIsClosing(true)
            // setIsMounted(false)
            timerRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false)
            }, animationDelay)
        }
    }, [animationDelay, onClose])

    const onEscDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            close()
        }
    }, [close])

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onEscDown)
        }
        return () => {
            clearTimeout(timerRef.current)
            window.removeEventListener('keydown', onEscDown)
        }
    }, [isOpen, onEscDown])

    return {
        isClosing,
        isMounted,
        close
    }
}
