import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLinks.module.scss'


export enum AppLinksTheme{
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red'

}
interface AppLinksProps extends LinkProps {
    className?: string,
    theme?: AppLinksTheme
}

export const AppLinks = ({ to, className, theme = AppLinksTheme.PRIMARY, children,  ...otherProps }: AppLinksProps) => {
    return (
        <Link to={to} className={classNames(cls.AppLink, {},[className, cls[theme]])}{...otherProps}>{children}</Link>
    );
};
