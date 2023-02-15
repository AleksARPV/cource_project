import { render, screen } from '@testing-library/react'
import { CustomButton, ThemeButton } from 'shared/ui/CustomButton/CustomButton'

describe('CustomButton', () => {
    test('Button render', () => {
        render(<CustomButton>Test</CustomButton>)
        expect(screen.getByText('Test')).toBeInTheDocument()
    })

    test('Button render theme', () => {
        render(<CustomButton theme={ThemeButton.CLEAR}>Test</CustomButton>)
        expect(screen.getByText('Test')).toHaveClass('clear')
        screen.debug()
    })
})
