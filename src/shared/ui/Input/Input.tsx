import { Link, LinkProps } from 'react-router-dom';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss'
import React, { ButtonHTMLAttributes, FC, InputHTMLAttributes, memo } from 'react';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value'|'onChange'|'readonly' >

interface InputProps extends HTMLInputProps{
className?: string,
   value?: string | number,
   onChange?: (value:string) => void,
   type: string,
   placeholder?: string,
   readonly?: boolean
}

export const Input = (props:InputProps) => {
    const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) =>{
        onChange?.(e.target.value)
    }
    const {className, value, onChange, type = 'text',placeholder,readonly} = props

    const mods: Mods = {
        [cls.readonly]:readonly,
    }
    return (
        <div className={classNames(cls.InputWrapper, mods, [className])}>
            {placeholder && (
                <div className='placeholder'>{placeholder}</div>
            )}
            <input className={classNames(cls.input,mods,[className])} type={type}
                value = {value}
                onChange={onChangeHandler}
                readOnly={readonly}/>
        </div>
    );
}
