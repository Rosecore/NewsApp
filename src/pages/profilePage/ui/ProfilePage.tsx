import { useAppDispatch } from "app/provider/StoreProvider";
import { FetchProfileData, ProfileActions, ProfileCard, ProfileReducer, getProfileData, getProfileError, getProfileForm, getProfileIsLoading, getProfileReadonly, getProfileValidationErrors } from "entities/Profile";
import { useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import {DynamicModuleLoader,  ReducersList } from "shared/lib/comonents/DynamicModuleLoader/DynamicModuleLoader";
import ProfilePageHeader from "./ProfilePageHeader/ProfilePageHeader";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { TextTheme } from "shared/ui/Text/Text";
import { Text } from "shared/ui/Text/Text";

const reducers: ReducersList = {
    profile:ProfileReducer
}
const ProfilePage = () =>{
    const {t} = useTranslation()
    const data = useSelector(getProfileData)
    const form = useSelector(getProfileForm)
    const error = useSelector(getProfileError)
    const isLoading = useSelector(getProfileIsLoading)
    const validationErrors = useSelector(getProfileValidationErrors)
    const dispatch = useAppDispatch()
    const readonly = useSelector(getProfileReadonly)

    const onChangeFirstName = useCallback((value:string)=>{
        dispatch(ProfileActions.updateProfile({first:value}))
    },[dispatch])

    const onChangeLastName = useCallback((value:string)=>{
        dispatch(ProfileActions.updateProfile({lastname:value}))
    },[dispatch])

    const onChangeCity = useCallback((value:string)=>{
        dispatch(ProfileActions.updateProfile({city:value}))
    },[dispatch])

    const onChangeUsername = useCallback((value:string)=>{
        dispatch(ProfileActions.updateProfile({username:value}))
    },[dispatch])

    const onChangeAvatar= useCallback((value:string)=>{
        dispatch(ProfileActions.updateProfile({avatar:value}))
    },[dispatch])

    const onChangeCurrency = useCallback((currency:Currency)=>{
        dispatch(ProfileActions.updateProfile({currency}))
    },[dispatch])

    const onChangeCountry = useCallback((country:Country)=>{
        dispatch(ProfileActions.updateProfile({country}))
    },[dispatch])

    const onChangeAge = useCallback((value:string)=>{
        dispatch(ProfileActions.updateProfile({age:Number(value)|| 0}))
    },[dispatch])


    useEffect(()=>{
        dispatch(FetchProfileData())
    },[dispatch])
    return (
        <DynamicModuleLoader reducers={reducers}>
            <div>
                <ProfilePageHeader/>
                {validationErrors?.length && validationErrors.map((err)=>(
                    <Text key = {err} theme= {TextTheme.ERROR} text = {err}/>
                ))}
                <ProfileCard 
                    data={form} 
                    isLoading={isLoading} 
                    error={error} 
                    readonly={readonly} 
                    onChangeFirstName = {onChangeFirstName} 
                    onChangeLastName={onChangeLastName}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}/>                               
            </div>
        </DynamicModuleLoader>)
}

export default ProfilePage