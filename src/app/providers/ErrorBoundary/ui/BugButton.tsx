import { CustomButton } from 'shared/ui/CustomButton/CustomButton'
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
        <CustomButton onClick={toThrow}>
            Throw Error
        </CustomButton>
    )
}
