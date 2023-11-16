import { classNames } from "shared/lib/classNames/classNames";
import cls from './ArticleDetailesPage.module.scss'
import { Article } from "entities/Article";
import { useParams } from "react-router-dom";
import { CommentList, getCommentsData, getCommentsError, getCommentsIsLoading } from "entities/Comment";
import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch } from "app/provider/StoreProvider";
import { useEffect } from "react";
import { fetchComments } from "entities/Comment";

interface ArticleDetailesPageProps {
    className?: string,
}

const ArticleDetailesPage = ({ className }: ArticleDetailesPageProps) => {
    const dispatch = useAppDispatch();
    const id = useParams<{ id: string }>()
    useEffect(() => {
        dispatch(fetchComments(id.id as string))
    }, [dispatch, id])


    const data = useSelector(getCommentsData)
    const error = useSelector(getCommentsError)
    const isLoading = useSelector(getCommentsIsLoading)
    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailesPageProps)}>
                ОшибОчка
            </div>
        );
    }
    else {
        if (isLoading){
            return (<div>Loading COmms</div>)
        }
        else if (error){
            return (<div>Error</div>)
        }
        else return (
            <div className={classNames(cls.ArticleDetailesPage)}>
                <Article id={id?.id as string} />
                <CommentList comments={data} />
            </div>
        );
    }

};

export default ArticleDetailesPage