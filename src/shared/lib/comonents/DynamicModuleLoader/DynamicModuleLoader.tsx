import { ReduxStoreWithManager, StateSchemaKey } from 'app/provider/StoreProvider/config/StateSchema';
import { ReactNode, useEffect } from 'react';
import { useStore } from 'react-redux';
import { Reducer } from 'redux';

export type ReducersList = {
    [name in StateSchemaKey]?:Reducer
}

 type ReducersListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps{
    children:ReactNode,
    reducers:ReducersList
}

const DynamicModuleLoader = ({children,reducers}:DynamicModuleLoaderProps) => {
    const store = useStore() as ReduxStoreWithManager
    useEffect(()=>{
        Object.entries(reducers).forEach(([name,reducer])=>{
            store.reducerManager.add(name as StateSchemaKey,reducer)
        })
        return () =>{
            Object.entries(reducers).forEach(([name,reducer])=>{
                store.reducerManager.remove(name as StateSchemaKey)
            })
        }
    })
    return (
        <>
            {children}
        </>
    );
};

export default DynamicModuleLoader;