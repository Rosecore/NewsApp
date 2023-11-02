import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss'
import { UseTheme } from 'app/provider/themeProvider/lib/UseTheme';
import DarkThemeIcon from 'shared/assets/icons/darkTheme.svg'
import LightThemeIcon from 'shared/assets/icons/LightTheme.svg'
import { Theme } from 'app/provider/themeProvider';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
    className?: string,
}
export const ThemeSwitcher = ({className}:ThemeSwitcherProps) => {
    const {theme, ToggleTheme} = UseTheme()
    return (
        <Button theme = {ThemeButton.CLEAR}
            className={classNames(cls.ThemeSwitcher,{},[className])} onClick={ToggleTheme}>
            {theme === Theme.DARK?<DarkThemeIcon/>:<LightThemeIcon/>}
        </Button>
    );
};
