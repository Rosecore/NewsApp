import { createReduxStore } from "./config/store";
import {StoreProvider} from "./ui/StoreProvider";
import { StateSchema } from "./config/StateSchema";
import  {AppDispatch, useAppDispatch}  from "./config/store";
import { ReduxStoreWithManager } from "./config/StateSchema";
import { ExtraThunk } from "./config/StateSchema";
export {StoreProvider, createReduxStore, StateSchema, AppDispatch, useAppDispatch, ReduxStoreWithManager,ExtraThunk}