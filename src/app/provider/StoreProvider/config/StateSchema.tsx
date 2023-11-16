import { EnhancedStore } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { ArticleDetailesSchema } from "entities/Article";
import { commentSchema } from "entities/Comment/model/types/commentSchema";
import { ProfileSchema } from "entities/Profile";
import { UserSchema } from "entities/User";
import { LoginShema } from "features/AuthByUsername";
import { NavigateOptions, To } from "react-router-dom";
import { AnyAction, CombinedState, Reducer, ReducersMapObject } from "redux";


export interface StateSchema {
    user: UserSchema
    login?: LoginShema,
    profile?: ProfileSchema,
    articleDetails?: ArticleDetailesSchema,
    comments?: commentSchema
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
export interface ExtraThunk {
    api: AxiosInstance,
    navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ExtraThunk;
    state: StateSchema;
}