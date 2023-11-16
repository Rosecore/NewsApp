import React, { CSSProperties, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss'

interface AvatarProps {
    className?: string,
    src?:string,
    size?: number,
    alt?:string
}

const Avatar = ({src,className,size,alt}:AvatarProps) => {
    const styles = useMemo<CSSProperties>(()=>{
        return {
            width:size,
            height:size
        }
    },[size])
    return (
        <img src={src} alt = {alt} style={styles} className={classNames(cls.avatar, {}, [className])}></img>
    );
};

export default Avatar;