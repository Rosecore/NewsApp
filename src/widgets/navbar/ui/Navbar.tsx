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

interface NavbarProps{
    className?: string
}

export const Navbar = ({className}:NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);
    return (
        <div className= {classNames(cls.navbar)}>
            <div className= {classNames(cls.links)}>
                <Button
                    theme={ThemeButton.CLEARINVERTED}
                    className={cls.links}
                    onClick={onToggleModal}
                >
                    {t('Войти')}
                </Button>
                <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                    {/* eslint-disable-next-line */}
                {t('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi consequatur eligendi impedit incidunt necessitatibus possimus quis saepe sunt totam.')}
                </Modal>
            </div>
        </div>
    );
};
