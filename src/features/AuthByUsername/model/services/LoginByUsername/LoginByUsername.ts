import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ExtraThunk } from 'app/provider/StoreProvider'
import axios from 'axios'
import { User, UserActions } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'

interface LoginByUsernameProps{
    username:string,
    password:string
}
export const LoginByUsername = createAsyncThunk<User,LoginByUsernameProps,{ rejectValue: string , extra:ExtraThunk}>(
    'login/LoginByUsername',
    async (AuthData, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.post<User>('/login', AuthData)
            if (!response){
                throw new Error();
            }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
            thunkAPI.dispatch(UserActions.setAuthData(response.data))
            return response.data
        } catch (err) {
            return thunkAPI.rejectWithValue("Неправильный юзернейм или пароль")
        }
    }
)

