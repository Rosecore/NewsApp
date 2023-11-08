import { EnhancedStore } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { CounterSchema } from "entities/Counter";
import { ProfileSchema } from "entities/Profile";
import { UserSchema } from "entities/User";
import { LoginShema } from "features/AuthByUsername";
import { To, NavigateOptions } from "react-router-dom";
import { Reducer } from "redux";
import { ReducersMapObject, AnyAction, CombinedState } from "redux";


export interface StateSchema{
   counter:CounterSchema
   user:UserSchema
   login?:LoginShema,
   profile?:ProfileSchema
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}
export interface ExtraThunk{
    api:AxiosInstance,
    navigate?:(to: To, options?: NavigateOptions)=> void
}
