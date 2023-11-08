import { createSlice } from '@reduxjs/toolkit'
import { ProfileSchema } from '../types/profile'
import { FetchProfileData } from '../services/fetchProfileData/fetchProfileData'

const initialState: ProfileSchema = {
    readonly:true,
    isLoading:false,
    error:undefined,
    data:undefined
}
export const ProfileSlice = createSlice({
    name:'Profile',
    initialState,
    reducers:{
       
    },
    extraReducers: (builder) => {
        builder
            .addCase(FetchProfileData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true
            })
            .addCase(FetchProfileData.fulfilled, (state, action) => {
                state.isLoading = false
                state.data = action.payload
            })
            .addCase(FetchProfileData.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})
export const {actions:ProfileActions} = ProfileSlice
export const {reducer:ProfileReducer} = ProfileSlice