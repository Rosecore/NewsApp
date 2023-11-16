import React, { ChangeEvent, memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss'

export interface selectOptions{
    value:string,
    content:string
}


interface SelectProps {
    className?: string;
    label?:string,
    options?:selectOptions[],
    value?:string,
    onChange?:(value:string)=>void,
    readonly?:boolean
}

const Select = memo(({className, label, options, value, onChange, readonly} : SelectProps) => {
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) =>{
        onChange?.(e.target.value)
    }
    const optionList = useMemo(() => {
        return options?.map((opt)=>(
            <option className = {cls.options} key ={opt.value}>{opt.content}</option>
        ))
    },[options])
    return (
        <div className={classNames(cls.wrapper, {},[className])}>
            {label && <span className={cls.label}>{label}</span>}
            <select className={cls.select} value={value} onChange={onChangeHandler} disabled={readonly}>
                {optionList}
            </select>
        </div>
    );
});

export default Select;