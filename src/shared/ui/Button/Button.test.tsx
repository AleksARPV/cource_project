import { render, screen } from '@testing-library/react'
import { Button, ButtonType } from 'shared/ui/Button/Button'

describe('CustomButton', () => {
    test('Button render', () => {
        render(<Button>Test</Button>)
        expect(screen.getByText('Test')).toBeInTheDocument()
    })

    test('Button render theme', () => {
        render(<Button theme={ButtonType.CLEAR}>Test</Button>)
        expect(screen.getByText('Test')).toHaveClass('clear')
        screen.debug()
    })
})
