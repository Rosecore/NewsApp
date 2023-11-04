import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss'
import { AppLinks, AppLinksTheme } from 'shared/ui/AppLink/AppLinks';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { t } from 'i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import { useSelector } from 'react-redux';
import { UserActions, getUserAuthData } from 'entities/User';
import { useAppDispatch } from 'features/AuthByUsername/model/services/UseAppDispatch/UseAppDispatch';

interface NavbarProps{
    className?: string
}

export const Navbar = ({className}:NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const isAuth = useSelector(getUserAuthData)
    const dispatch = useAppDispatch()
    const onClose = useCallback(() => {
        setIsAuthModal(false);
    }, []);
    const onShow = useCallback(() => {
        setIsAuthModal(true);
    }, []);
    const onLogout = useCallback(() => {
        setIsAuthModal(false);
        dispatch(UserActions.logout())
    }, [dispatch]);
    if (isAuth){
        return(        
            <div className= {classNames(cls.navbar)}>
                <Button
                    theme={ThemeButton.CLEARINVERTED}
                    className={cls.links}
                    onClick={onLogout}
                >
                    {t('Выйти')}
                </Button>
            </div>)

    }
    return (
        <div className= {classNames(cls.navbar)}>
            <Button
                theme={ThemeButton.CLEARINVERTED}
                className={cls.links}
                onClick={onShow}
            >
                {t('Войти')}
            </Button>
            <LoginModal isOpen ={isAuthModal} onClose = {onClose}/>
        </div>
    );
};
