import { classNames } from "shared/lib/classNames/classNames";
import cls from './CommentList.module.scss'
import { ArticleBlock, ArticleImageBlock } from "entities/Article/model/types/Article";
import { CommentItem } from "../CommentItem/CommentItem";
import { IComment } from "entities/Comment/model/types/comment";

interface CommentListProps {
    className?: string,
    comments?: IComment[],
    isLoading?: boolean,
    error?: string
}

export const CommentList = ({ className, comments, isLoading, error }: CommentListProps) => {

    return (
        <div className={classNames(cls.CommentList)}>
            {comments ?
                comments.map(el => (<CommentItem key = {el.id} comment = {el}/>))
                :
                <div>Nothing to show</div>}
        </div>
    );
};

