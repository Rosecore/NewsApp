import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss'
import React, { ButtonHTMLAttributes, FC, InputHTMLAttributes, memo } from 'react';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value'|'onChange' >

interface InputProps extends HTMLInputProps{
    className?: string,
   value?: string,
   onChange?:(value:string)=>void,
   type:string,
   placeholder?:string
}

export const Input = memo((props:InputProps) => {
    const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) =>{
        onChange?.(e.target.value)
    }
    const {className, value, onChange, type = 'text',placeholder} = props
    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder && (
                <div className='placeholder'>{placeholder}</div>
            )}
            <input className={classNames(cls.input,{},[className])} type={type}
                value = {value}
                onChange={onChangeHandler}/>
        </div>
    );
});
