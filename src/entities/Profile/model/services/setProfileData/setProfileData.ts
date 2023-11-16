import { createAsyncThunk } from '@reduxjs/toolkit'
import { ProfileType, ProfileValidationErrors } from '../../types/profile'
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm'
import { ThunkConfig } from 'app/provider/StoreProvider/config/StateSchema'
import { validateProfileData } from '../validateProfileData/validateProfileData'

export const setProfileData = createAsyncThunk<ProfileType,void,ThunkConfig<ProfileValidationErrors[]>>(
    'profile/setProfileData',
    async (_,thunkAPI, ) => {
        const {extra, rejectWithValue,dispatch, getState} = thunkAPI
        const formData = getProfileForm(getState())
        const errors = validateProfileData(formData)

        if (errors.length){
            return rejectWithValue(errors)
        }
        try {
            const response = await extra.api.put<ProfileType>('/profile', formData)
            if (!response){
                throw new Error();
            }
            return response.data
        } catch (err) {
            return rejectWithValue([ProfileValidationErrors.SERV_ERR])
        }
    }
)

