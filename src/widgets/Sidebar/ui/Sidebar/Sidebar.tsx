import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss'
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';
import { Theme } from 'app/provider/themeProvider';
import { AppLinks, AppLinksTheme } from 'shared/ui/AppLink/AppLinks';
import { RoutePath } from 'shared/config/routeconfig/routeconfig';

interface SidebarProps {
    className?: string,
}
export const Sidebar = ({className}:SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)
    const onToggle=()=>{
        setCollapsed(prev=>!prev)
    }
    return (
        <div className={classNames(cls.Sidebar,{[cls.collapsed]:collapsed},[className])}>
            <Button onClick={onToggle} className={cls.collapsedbtn} theme ={ThemeButton.BACKGROUNDINVERTED} square = {true} size={ButtonSize.L}>{'>'}</Button>
            <div className={cls.sidebarItems}>
                <AppLinks theme= {AppLinksTheme.SECONDARY} to={RoutePath.main} className={classNames(cls.link)}>Главная</AppLinks>
                <AppLinks theme= {AppLinksTheme.SECONDARY} to={RoutePath.about} className={classNames(cls.link)}>Вторая</AppLinks>
            </div>
            
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher className={cls.lang}/>
            </div>

        </div>
    );
};
