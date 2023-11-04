import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { LoginShema } from '../types/LoginShema'
import { LoginByUsername } from '../services/LoginByUsername/LoginByUsername'

const initialState: LoginShema = {
    username:'',
    password:'',
    isLoading:false,
    error:''
}
export const LoginSlice = createSlice({
    name:'login',
    initialState,
    reducers:{
        setUsername : (state , action:PayloadAction<string>) => {
            state.username = action.payload

        },
        setPassword : (state, action:PayloadAction<string>) => {
            state.password = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(LoginByUsername.pending, (state) => {
                state.error = undefined;
                state.isLoading = true
            })
            .addCase(LoginByUsername.fulfilled, (state, action) => {
                state.isLoading = false
            })
            .addCase(LoginByUsername.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})
export const {actions:LoginActions} = LoginSlice
export const {reducer:LoginReducer} = LoginSlice