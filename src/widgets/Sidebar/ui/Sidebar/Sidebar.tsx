import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss'
import { memo, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';
import { SidebarItemList } from 'widgets/Sidebar/model/item';
import { SidebarItem } from '../SidebarItems/SidebarItem';
//import GojoImage from 'shared/assets/gojo.png'

interface SidebarProps {
    className?: string,
}
export const Sidebar = memo(({className}:SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)
    const onToggle=()=>{
        setCollapsed(prev=>!prev)
    }
    return (
        <div className={classNames(cls.Sidebar,{[cls.collapsed]:collapsed},[className])}>
          
            <Button onClick={onToggle} className={cls.collapsedbtn} theme ={ThemeButton.BACKGROUNDINVERTED} square = {true} size={ButtonSize.L}>{'>'}</Button>
            <div className={cls.sidebarItems}>
                { SidebarItemList.map((item)=>(
                    <SidebarItem  
                        key={item.text}
                        item={item}
                        collapsed={collapsed}/>
                ))}
            </div>

            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher className={cls.lang}/>
            </div>

        </div>
    );
});
