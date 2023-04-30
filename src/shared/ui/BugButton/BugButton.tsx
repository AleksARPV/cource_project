import { Button, ButtonType } from '../Button/Button'
import { useEffect, useState } from 'react'

interface BugButtonProps {
    className?: string
}

export const BugButton = ({ className }: BugButtonProps) => {
    const [error, setError] = useState(false)
    const toThrow = () => {
        setError(!error)
    }

    useEffect(() => {
        if (error) {
            throw new Error()
        }
    }, [error])

    return (
        <Button theme={ButtonType.OUTLINE_INVERTED} className={className} onClick={toThrow}>
            Throw Error
        </Button>
    )
}
