import React, { ReactNode } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';

interface StoreProps{
    children?: ReactNode,
    initialState? :StateSchema
}
const StoreProvider = ({children, initialState} : StoreProps ) => {
    const store = createReduxStore(initialState)
    return (
        <Provider store={store} >
            {children}
        </Provider>
    );
};
const store11 = createReduxStore()
export type AppDispatch = typeof store11.dispatch

export default StoreProvider;
