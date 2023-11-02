import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';

interface StoreProps{
    children?: ReactNode,
    initialState? :StateSchema
}

const StoreProvider = ({children, initialState} : StoreProps ) => {
    const store = createReduxStore()
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default StoreProvider;