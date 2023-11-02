import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { CounterActions } from '../model/slice/CounterSlice';
import { StateSchema } from 'app/provider/StoreProvider/config/StateSchema';

interface CounerProps{
    className?: string
}

const Counter = ({className}:CounerProps) => {
    const dispatch = useDispatch()
    const counterValue = useSelector((state:StateSchema)=>state.counter.value)
    const increment = () =>{
        dispatch(CounterActions.increment)
    }
    const decrement = () =>{
        dispatch(CounterActions.decrement)
    }
    return (
        <div>
            <h1>value</h1>
            <Button onClick={increment}>increment</Button>
            <Button onClick={decrement}>decrement</Button>
        </div>
    );
};

export default Counter;