import { createAsyncThunk } from '@reduxjs/toolkit'
import { ExtraThunk } from 'app/provider/StoreProvider'
import { ProfileType } from '../../types/profile'

export const FetchProfileData = createAsyncThunk<ProfileType,void,{ rejectValue: string , extra:ExtraThunk}>(
    'profile/FetchProfileData',
    async (_,thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.get<ProfileType>('/profile')
            if (!response.data){
                throw new Error();
            }
            return response.data
        } catch (err) {
            return thunkAPI.rejectWithValue("Неправильный юзернейм или пароль")
        }
    }
)

