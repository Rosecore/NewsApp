import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginShema } from '../types/LoginShema';
import { LoginByUsername } from '../services/LoginByUsername/LoginByUsername';

const initialState: LoginShema = {
    isLoading: false,
    username: '',
    password: '',
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(LoginByUsername.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(LoginByUsername.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(LoginByUsername.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

// Action creators are generated for each case reducer function
export const { actions: LoginActions } = loginSlice;
export const { reducer: LoginReducer } = loginSlice;
