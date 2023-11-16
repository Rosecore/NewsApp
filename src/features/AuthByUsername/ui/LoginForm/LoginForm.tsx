import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { LoginActions, LoginReducer } from '../../model/slice/LoginSlice';
import { memo, useCallback, useEffect } from 'react';
import { LoginByUsername } from '../../model/services/LoginByUsername/LoginByUsername';
import { TextTheme, Text } from 'shared/ui/Text/Text';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from    '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from'../..//model/selectors/getLoginIsLoading/getLoginIsLoading';
import {DynamicModuleLoader,  ReducersList } from 'shared/lib/comonents/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'app/provider/StoreProvider'
//import { useAppDispatch } from '../../../../app/provider/StoreProvider';

const initialReducers:ReducersList = {
    login:LoginReducer
}
export interface LoginFormProps {
    className?: string,
    onSucsess?:()=>void
}
const LoginForm = memo(({className, onSucsess}:LoginFormProps) => {
    const {t} = useTranslation()
    const dispatch = useAppDispatch()
    const username = useSelector(getLoginUsername)
    const password = useSelector(getLoginPassword)
   
    const error = useSelector(getLoginError)
    const isLoading = useSelector(getLoginIsLoading)
    useEffect(()=>{
        console.log(username,password)
    })

    const onChangeUsername = useCallback((value:string) =>{
        dispatch(LoginActions.setUsername(value))
    },[dispatch])

    const onChangePassword =  useCallback((value:string) =>{
        dispatch(LoginActions.setPassword(value))
    },[dispatch])

    const onLoginClick =  useCallback(async () =>{
        //@ts-ignore
        const result = await dispatch(LoginByUsername({username,password}))
        if (result.meta.requestStatus ==='fulfilled'){
            onSucsess?.();
        }
    },[dispatch,password,username,onSucsess])

 
    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <div className={classNames(cls.LoginForm,{},[className])}>
                <Text title={t('LoginForm')}></Text>
                {error && <Text theme={TextTheme.ERROR} text={error}></Text>}
                <Input type='text' onChange = {onChangeUsername} placeholder={t('EnterUsername')} value={username}></Input>
                <Input type='text' onChange = {onChangePassword} placeholder={t('EnterPassword')} value={password}></Input>
                <Button className={cls.lognBtn} onClick={onLoginClick} disabled={isLoading}>
                    {t("Enter")}
                </Button>
            </div>
        </DynamicModuleLoader>

    );
});
export default LoginForm
