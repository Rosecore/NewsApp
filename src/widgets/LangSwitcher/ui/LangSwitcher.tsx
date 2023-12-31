import { Theme } from 'app/provider/themeProvider';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './LangSwitcher.module.scss'
import { memo } from 'react';

interface LangSwitcherProps {
    className?: string,
}
export const LangSwitcher = memo(({className}:LangSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const toggle = () =>{
        i18n.changeLanguage(i18n.language === 'ru'?'en':'ru')
    }
   
    return  <Button className={classNames(cls.className, {}, [className])} theme ={ThemeButton.CLEAR} onClick={toggle}>{t('Translate')}</Button>
});
