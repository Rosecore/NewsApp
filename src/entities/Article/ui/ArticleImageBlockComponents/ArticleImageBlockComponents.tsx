import { classNames } from "shared/lib/classNames/classNames";
import cls from './ArticleImageBlockComponents.module.scss'
import { ArticleBlock, ArticleImageBlock } from "entities/Article/model/types/Article";

interface ArticleImageBlockComponentsProps {
    className?: string,
    block?:ArticleImageBlock
}

export const ArticleImageBlockComponents = ({ className, block }: ArticleImageBlockComponentsProps) => {

    return (
        <div className={classNames(cls.ArticleImageBlockComponents)}>
            <img src={block?.src} alt="altblock"></img>
            <text>{block?.title}</text>
        </div>
    );
};

