import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ArticleDetailesSchema } from '../types/articleDetailsSchema'
import { fetchArticleByID } from '../services/fetchArticleByID/fetchArticleById'

const initialState: ArticleDetailesSchema = {
    isLoading: false,
    error: undefined,
    data: undefined
}
export const articleSlice = createSlice({
    name: 'Atricle',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleByID.pending, (state) => {
                state.error = undefined;
                state.isLoading = true
            })
            .addCase(fetchArticleByID.fulfilled, (state, action) => {
                state.isLoading = false
                state.data = action.payload
            })
            .addCase(fetchArticleByID.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})
export const { actions: articleActions } = articleSlice
export const { reducer: articleReducer } = articleSlice