import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ProfileSchema, ProfileType } from '../types/profile'
import { FetchProfileData } from '../services/fetchProfileData/fetchProfileData'
import { User } from 'entities/User'
import { setProfileData } from '../services/setProfileData/setProfileData'

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
        setReadonly: (state,action:PayloadAction<boolean>)=>{
            state.readonly=action.payload
        },
        setNotReadonly: (state)=>{
            state.readonly=true
            state.form = state.data
            state.validateError = undefined
        },
        updateProfile: (state,action:PayloadAction<ProfileType>)=>{
            state.form = {
                ...state.form, 
                ...action.payload
            }
        },
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
                state.form = action.payload
            })
            .addCase(FetchProfileData.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
            .addCase(setProfileData.pending, (state) => {
                state.validateError = undefined;
                state.isLoading = true
            })
            .addCase(setProfileData.fulfilled, (state, action) => {
                state.isLoading = false
                state.data = action.payload
                state.form = action.payload
                state.validateError = undefined
            })
            .addCase(setProfileData.rejected, (state, action) => {
                state.isLoading = false
                state.validateError = action.payload
            })
    },
})
export const {actions:ProfileActions} = ProfileSlice
export const {reducer:ProfileReducer} = ProfileSlice