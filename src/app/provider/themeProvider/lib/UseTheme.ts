import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from 'app/provider/themeProvider/lib/ThemeContext';
import { useContext } from 'react';

interface UseThemeResult{
    theme: Theme;
    ToggleTheme: () =>  void;
}


export function UseTheme():UseThemeResult{
    const {theme, setTheme} = useContext(ThemeContext)
    const ToggleTheme = () =>{
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
        setTheme?.(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return { theme: theme || Theme.LIGHT, ToggleTheme}
}