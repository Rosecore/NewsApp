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

interface NavbarProps{
    className?: string
}

export const Navbar = ({className}:NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onClose = useCallback(() => {
        setIsAuthModal(false);
    }, []);
    const onShow = useCallback(() => {
        setIsAuthModal(true);
    }, []);
    return (
        <div className= {classNames(cls.navbar)}>
            <div className= {classNames(cls.links)}>
                <Button
                    theme={ThemeButton.CLEARINVERTED}
                    className={cls.links}
                    onClick={onShow}
                >
                    {t('Войти')}
                </Button>
                <LoginModal isOpen ={isAuthModal} onClose = {onClose}/>
            </div>
        </div>
    );
};
