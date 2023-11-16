import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/provider/StoreProvider';
import { ProfileReducer } from 'entities/Profile';
import { LoginReducer } from 'features/AuthByUsername';
import { ReducersList } from 'shared/lib/comonents/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
    login: LoginReducer,
    profile: ProfileReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
) => (StoryComponent: StoryFn) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);
