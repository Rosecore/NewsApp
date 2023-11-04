import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss'
import { ButtonHTMLAttributes, FC } from 'react';

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

export const Button: FC<ButtonProps> = (props) => {
    const {className, children, theme, square, size, disabled, ...otherProps} = props
    return (
        <button className={classNames(cls.Button,{[cls.square] : square, [cls.disabled]:disabled},[className, cls[theme],cls[size]])}{...otherProps} disabled={disabled}>
            {children}
        </button>
    );
};
