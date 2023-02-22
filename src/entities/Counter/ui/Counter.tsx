import { CustomButton } from 'shared/ui/CustomButton/CustomButton'
import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from 'entities/Counter/model/slice/counterSlice'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'

export const Counter = () => {
    const dispatch = useDispatch()
    const counterValue = useSelector(getCounterValue)
    const increment = () => {
        dispatch(counterActions.increment())
    }
    const decrement = () => {
        dispatch(counterActions.decrement())
    }

    return (
        <div>
            <h1 data-testid='value-title'>{counterValue}</h1>
            <CustomButton data-testid='increment-btn' onClick={increment}>Increment</CustomButton>
            <CustomButton data-testid='decrement-btn' onClick={decrement}>Decrement</CustomButton>
        </div>
    )
}
