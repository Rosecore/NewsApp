import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss'

interface PageErrorProps {
    className?: string,
}
export const PageError = ({className}:PageErrorProps) => {
    const { t, i18n } = useTranslation();

    const reloadPage = () =>{
        location.reload()
    }
    return   (<div className={classNames(cls.PageError,{},[className])}>
        <p>{t('UnknownError')}</p>
        <Button onClick={reloadPage}>{t('ReloadPage')}</Button>
    </div>)
};
