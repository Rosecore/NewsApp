import { createAsyncThunk } from '@reduxjs/toolkit'
import { ExtraThunk } from 'app/provider/StoreProvider'
import { IComment } from '../../model/types/comment'

export const fetchComments = createAsyncThunk<IComment[],string,{ rejectValue: string , extra:ExtraThunk}>(
    'atricle/fetchComments',
    async (articleID,thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.get<IComment[]>('/comments?articleID=' + articleID)
            if (!response.data){
                throw new Error();
            }
            return response.data
        } catch (err) {
            return thunkAPI.rejectWithValue("Неправильный юзернейм или пароль")
        }
    }
)

