import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/provider/StoreProvider';
import { LoginReducer } from 'features/AuthByUsername/model/slice/LoginSlice';
import { ReducersList } from 'shared/lib/comonents/DynamicModuleLoader/DynamicModuleLoader';
const defaultAsyncReducers: ReducersList = {
    login: LoginReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
) => (StoryComponent: StoryFn) => (
    <StoreProvider initialState ={state as StateSchema}  asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);
