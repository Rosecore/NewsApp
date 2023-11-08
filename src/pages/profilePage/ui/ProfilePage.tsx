import { useAppDispatch } from "app/provider/StoreProvider";
import { FetchProfileData, ProfileCard, ProfileReducer } from "entities/Profile";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import DynamicModuleLoader, { ReducersList } from "shared/lib/comonents/DynamicModuleLoader/DynamicModuleLoader";

const reducers: ReducersList = {
    profile:ProfileReducer
}
const ProfilePage = () =>{
    const {t} = useTranslation()

    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(FetchProfileData())
    },[dispatch])
    return (
        <DynamicModuleLoader reducers={reducers}>\
            <div>
                {t('ProfilePage')}
                <ProfileCard></ProfileCard>
            </div>
        </DynamicModuleLoader>)
}

export default ProfilePage