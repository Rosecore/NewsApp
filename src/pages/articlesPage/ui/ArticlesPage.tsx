import { classNames } from "shared/lib/classNames/classNames";
import cls from './articledPage.module.scss'

interface ArticlesPageProps {
    className?: string,
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {

    return (
        <div className={classNames(cls.ArticlesPage)}>
            ArticledPage
        </div>
    );
};

export default ArticlesPage