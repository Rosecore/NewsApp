import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss'
import { CSSProperties } from 'react';

interface SkeletonProps {
    className?: string,
    width: string | number,
    height: string | number,
    border?: string
}
export const Skeleton = ({ className, width, height, border }: SkeletonProps) => {
    const style: CSSProperties = {
        width: width,
        height: height,
        borderRadius: border
    }
    return (
        <div className={classNames(cls.Skeleton, {}, [className])}
            style={style}>
        </div>
    );
};
