import { StateSchema } from "app/provider/StoreProvider"
import { CounterReducers, CounterActions } from "./CounterSlice"
import { CounterSchema } from "../types/CounterSchema"

describe('CounterSlice',()=>{
    test('counter slice increment',()=>{
        const state:CounterSchema ={
            value:10
        }
        expect(CounterReducers(state,CounterActions.increment)).toEqual({value:11})
    })
    test('counter slice decrement',()=>{
        const state:CounterSchema ={
            value:10
        }
        expect(CounterReducers(state,CounterActions.decrement)).toEqual({value:9})
    })
    test('should work with empty state',()=>{
        const state:CounterSchema ={
            value:10
        }
        expect(CounterReducers(undefined,CounterActions.increment)).toEqual({value:1})
    })
})