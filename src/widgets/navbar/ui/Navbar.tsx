import { useAppDispatch } from 'app/provider/StoreProvider';
import { UserActions, getUserAuthData } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string,
    theme?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
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
    if (isAuth) {
        return (
            <div className={classNames(cls.navbar)}>
                <Button
                    theme={ThemeButton.BACKGROUNDINVERTED}
                    className={cls.links}
                    onClick={onLogout}
                >
                    {t('Выйти')}
                </Button>
            </div>)

    }
    return (
        <div className={classNames(cls.navbar)}>
            <Button
                theme={ThemeButton.CLEARINVERTED}
                className={cls.links}
                onClick={onShow}
            >
                {t('Войти')}
            </Button>
            <LoginModal isOpen={isAuthModal} onClose={onClose} />
        </div>
    );
});
