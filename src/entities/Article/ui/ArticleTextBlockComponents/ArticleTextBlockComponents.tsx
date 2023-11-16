import { classNames } from "shared/lib/classNames/classNames";
import cls from './ArticleTextBlockComponents.module.scss'
import { ArticleBlock, ArticleTextBlock } from "entities/Article/model/types/Article";
import { Text } from "shared/ui/Text/Text";

interface ArticleTextBlockComponentsProps {
    className?: string,
    block?:ArticleTextBlock
}

export const ArticleTextBlockComponents = ({ className , block}: ArticleTextBlockComponentsProps) => {

    return (
        <div className={classNames(cls.ArticleDetailesPageProps)}>
            {block?.title && <Text title={block.title}/>}
            {block?.paragraphs.map(el => (
                <Text key = {el} text = {el} />))}
            
        </div>
    );
};

