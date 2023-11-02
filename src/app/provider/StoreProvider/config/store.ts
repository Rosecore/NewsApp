import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { CounterReducers } from "entities/Counter";
import { UserReducer } from "entities/User";



export function createReduxStore(initialState?: StateSchema){
    const RootReducer: ReducersMapObject<StateSchema>={
        counter:CounterReducers,
        user: UserReducer
    }
    return configureStore<StateSchema>({
        reducer: RootReducer,
        preloadedState:initialState
    })
}