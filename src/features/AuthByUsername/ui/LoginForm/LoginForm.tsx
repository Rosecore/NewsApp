import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { UserActions } from 'entities/User';
import { LoginActions } from '../../model/slice/LoginSlice';
import { useCallback, memo } from 'react';
import { SelectLoginState } from '../../model/selectors/SelectLoginState/SelectLoginState';
import { LoginByUsername } from '../../model/services/LoginByUsername/LoginByUsername';
import { useAppDispatch } from '../../model/services/UseAppDispatch/UseAppDispatch';
import { TextTheme, Text } from 'shared/ui/Text/Text';
//import { useAppDispatch } from '../../../../app/provider/StoreProvider';


interface LoginFormProps {
    className?: string,
}
export const LoginForm = memo(({className}:LoginFormProps) => {
    const {t} = useTranslation()
    const dispatch = useAppDispatch();
    const {username, password, error, isLoading} = useSelector(SelectLoginState)

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
        <div className={classNames(cls.LoginForm,{},[className])}>
            <Text title={t('LoginForm')}></Text>
            {error && <Text theme={TextTheme.ERROR} text={error}></Text>}
            <Input type='text' onChange = {onChangeUsername} placeholder='EnterUsername' value={username}></Input>
            <Input type='text' onChange = {onChangePassword} placeholder='EnterPassword' value={password}></Input>
            <Button className={cls.lognBtn} onClick={onLoginClick} disabled={isLoading}>
                {t("Enter")}
            </Button>
        </div>
    );
});
