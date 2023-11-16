import { classNames } from "shared/lib/classNames/classNames";
import cls from './CommentItem.module.scss'
import { ArticleBlock, ArticleImageBlock } from "entities/Article/model/types/Article";
import { IComment } from "entities/Comment/model/types/comment";
import Avatar from "shared/ui/Avatar/Avatar";
import { Text } from "shared/ui/Text/Text";

interface CommentItemProps {
    className?: string,
    comment: IComment
}

export const CommentItem = ({ className, comment}: CommentItemProps) => {

    return (
        <div className={classNames(cls.CommentItem)}>
            <div className={cls.header}>
                <Avatar size={30}/>
                <Text text={comment.user.username} />
            </div>
            <Text text={comment.text}
        </div>
    );
};

