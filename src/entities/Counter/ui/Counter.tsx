import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { CounterActions } from '../model/slice/CounterSlice';
import { StateSchema } from 'app/provider/StoreProvider/config/StateSchema';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

interface CounerProps{
    className?: string
}

const Counter = ({className}:CounerProps) => {
    const dispatch = useDispatch()
    const counterValue = useSelector(getCounterValue)
    const increment = () =>{
        dispatch(CounterActions.increment())
    }
    const decrement = () =>{
        dispatch(CounterActions.decrement())
    }
    return (
        <div>
            <h1 data-testid = "value-title">value = {counterValue}</h1>
            <Button data-testid = "increment-btn" onClick={increment}>increment</Button>
            <Button data-testid = "decrement-btn" onClick={decrement}>decrement</Button>
        </div>
    );
};

export default Counter;