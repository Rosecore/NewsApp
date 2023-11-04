import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { CounterReducers } from "entities/Counter";
import { UserReducer } from "entities/User";
import { LoginReducer } from "./../../../../features/AuthByUsername";



export function createReduxStore(initialState?: StateSchema){
    const RootReducer: ReducersMapObject<StateSchema>={
        counter:CounterReducers,
        user: UserReducer,
        login: LoginReducer
    }
    return configureStore<StateSchema>({
        reducer: RootReducer,
        preloadedState:initialState
    })
}

