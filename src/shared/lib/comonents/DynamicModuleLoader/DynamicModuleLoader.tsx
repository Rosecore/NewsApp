import { ReduxStoreWithManager, StateSchemaKey } from 'app/provider/StoreProvider/config/StateSchema';
import { useAppDispatch } from 'app/provider/StoreProvider/ui/StoreProvider';
import { LoginReducer } from 'features/AuthByUsername/model/slice/LoginSlice';
import React, { ReactInstance, ReactNode, useEffect } from 'react';
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
        Object.entries(reducers).forEach(([name,reducer]:ReducersListEntry)=>{
            store.reducerManager.add(name,reducer)
        })
        return () =>{
            Object.entries(reducers).forEach(([name,reducer]:ReducersListEntry)=>{
                store.reducerManager.remove(name)
            })
        }
    },[])
    return (
        <>
            {children}
        </>
    );
};

export default DynamicModuleLoader;