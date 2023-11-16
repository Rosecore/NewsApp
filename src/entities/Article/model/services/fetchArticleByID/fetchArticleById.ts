import { createAsyncThunk } from '@reduxjs/toolkit'
import { ExtraThunk } from 'app/provider/StoreProvider'
import { IArticle } from '../../types/Article'

export const fetchArticleByID = createAsyncThunk<IArticle,string,{ rejectValue: string , extra:ExtraThunk}>(
    'atricle/FetchArticleByID',
    async (articleID,thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.get<IArticle>('/articles/' + articleID)
            if (!response.data){
                throw new Error();
            }
            return response.data
        } catch (err) {
            return thunkAPI.rejectWithValue("Неправильный юзернейм или пароль")
        }
    }
)

