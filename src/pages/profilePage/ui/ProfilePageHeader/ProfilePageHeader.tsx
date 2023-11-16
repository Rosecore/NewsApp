import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfilePageHeader.module.scss'
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { ProfileType } from 'entities/Profile/model/types/profile';
import { Loader } from 'shared/ui/Loader/Loader';
import { useSelector } from 'react-redux';
import { ProfileActions, getProfileReadonly, setProfileData } from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'app/provider/StoreProvider';

interface ProfilePageHeaderProps{
    className?: string,

}

const ProfilePageHeader = ({className}:ProfilePageHeaderProps) => {
    const readonly = useSelector(getProfileReadonly)
    const dispatch = useAppDispatch();
    const onEdit = useCallback(()=>{
        dispatch(ProfileActions.setReadonly(false))
    },[dispatch])

    const onCancelEdit = useCallback(()=>{
        dispatch(ProfileActions.setNotReadonly())
    },[dispatch])

    const onSave = useCallback(async()=>{
        const result = await dispatch(setProfileData())
        if (result.meta.requestStatus ==='fulfilled'){
           
        }
    },[dispatch])


    return (
        <div className={classNames(cls.ProfileCard,{},[className])}>
            <div className={cls.header}>
                <Text title='Ваш милый профиль'/>
                { readonly?
                    <Button className={cls.editBtn} onClick={onEdit}>Редактировать</Button>
                    :
                    <>
                        <Button className={cls.editBtn} onClick={onSave}>Сохранить</Button>
                        <Button className={cls.editBtn} onClick={onCancelEdit}>Отменить</Button>
                    </>
                }
            </div>
        </div>
    );
};

export default ProfilePageHeader;