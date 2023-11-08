import { Mods, classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss'
import { ButtonHTMLAttributes, memo } from 'react';

export enum ThemeButton{
    CLEAR= 'clear',
    OUTLINE = 'outline',
    BACKGROUND= 'background',
    BACKGROUNDINVERTED = 'background-inverted',
    CLEARINVERTED ="clearInverted"
}

export enum ButtonSize{
    M='size_m',
    L='size_l',
    XL='size_xl'
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string,
    theme?:ThemeButton,
    square?:boolean,
    size?:ButtonSize,
    disabled?:boolean
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme = ThemeButton.OUTLINE,
        square,
        disabled,
        size = ButtonSize.M,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled,
    };

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [className])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
