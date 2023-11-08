import { classNames } from 'shared/lib/classNames/classNames';
import { RoutePath } from 'shared/config/routeconfig/routeconfig';
import { AppLinks, AppLinksTheme } from 'shared/ui/AppLink/AppLinks';
import { SidebarItemType } from 'widgets/Sidebar/model/item';
import cls from './SidebarItem.module.scss';
import { memo } from 'react';

interface SidebarItemProps {
    item:SidebarItemType,
    collapsed:boolean
}
export const SidebarItem = memo(({item,collapsed}:SidebarItemProps) => {
    return (
        <AppLinks className={classNames(cls.item, { [cls.collapsed]: collapsed })} theme= {AppLinksTheme.SECONDARY} to={item.path}>{item.text}</AppLinks>
    );
});
