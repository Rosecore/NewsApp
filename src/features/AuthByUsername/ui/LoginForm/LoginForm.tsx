import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useSelector, useStore } from 'react-redux';
import { LoginActions, LoginReducer } from '../../model/slice/LoginSlice';
import { useCallback, memo, useEffect } from 'react';
import { LoginByUsername } from '../../model/services/LoginByUsername/LoginByUsername';
import { useAppDispatch } from '../../model/services/UseAppDispatch/UseAppDispatch';
import { TextTheme, Text } from 'shared/ui/Text/Text';
import { ReduxStoreWithManager } from 'app/provider/StoreProvider';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from    '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from'../..//model/selectors/getLoginIsLoading/getLoginIsLoading';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/comonents/DynamicModuleLoader/DynamicModuleLoader';
//import { useAppDispatch } from '../../../../app/provider/StoreProvider';

const initialReducers:ReducersList = {
    login:LoginReducer
}
export interface LoginFormProps {
    className?: string,
}
const LoginForm = memo(({className}:LoginFormProps) => {
    const {t} = useTranslation()
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername)
    const password = useSelector(getLoginPassword)
    const error = useSelector(getLoginError)
    const isLoading = useSelector(getLoginIsLoading)


    const onChangeUsername = useCallback((value:string) =>{
        dispatch(LoginActions.setUsername(value))
    },[dispatch])

    const onChangePassword =  useCallback((value:string) =>{
        dispatch(LoginActions.setPassword(value))
    },[dispatch])

    const onLoginClick =  useCallback(() =>{
        dispatch(LoginByUsername({username,password}))
    },[dispatch,password,username])

 
    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <div className={classNames(cls.LoginForm,{},[className])}>
                <Text title={t('LoginForm')}></Text>
                {error && <Text theme={TextTheme.ERROR} text={error}></Text>}
                <Input type='text' onChange = {onChangeUsername} placeholder='EnterUsername' value={username}></Input>
                <Input type='text' onChange = {onChangePassword} placeholder='EnterPassword' value={password}></Input>
                <Button className={cls.lognBtn} onClick={onLoginClick} disabled={isLoading}>
                    {t("Enter")}
                </Button>
            </div>
        </DynamicModuleLoader>

    );
});
export default LoginForm
