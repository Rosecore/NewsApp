import { CombinedState, Reducer, ReducersMapObject, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { CounterReducers } from "entities/Counter";
import { UserReducer } from "entities/User";
import { createReducerManager } from "./ReducersManager";
import { useDispatch } from "react-redux";
import { $ax } from "shared/api/api";
import { To, NavigateOptions } from "react-router-dom";


export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    navigate?: (to: To, options?: NavigateOptions)=> void,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: CounterReducers,
        user: UserReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        preloadedState: initialState,
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk:{
                extraArgument:{
                    api:$ax,
                    navigate
                }
            }
        })
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']

export const useAppDispatch = () => useDispatch<AppDispatch>();
