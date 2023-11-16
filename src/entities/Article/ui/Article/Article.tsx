import { classNames } from "shared/lib/classNames/classNames";
import cls from './Article.module.scss'
import { DynamicModuleLoader, ReducersList } from "shared/lib/comonents/DynamicModuleLoader/DynamicModuleLoader";
import { articleReducer } from "entities/Article/model/slice/articleSlice";
import { useAppDispatch } from "app/provider/StoreProvider";
import { memo, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { getArticleData, getArticleError, getArticleIsLoading } from "entities/Article/model/selectors/articleSelectors";
import { Text } from "shared/ui/Text/Text";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { AritcleBlockTypes, ArticleBlock } from "entities/Article/model/types/Article";
import { t } from "i18next";
import Avatar from "shared/ui/Avatar/Avatar";
import { ArticleImageBlockComponents } from "../ArticleImageBlockComponents/ArticleImageBlockComponents";
import { ArticleTextBlockComponents } from "../ArticleTextBlockComponents/ArticleTextBlockComponents";
import { fetchArticleByID } from "entities/Article/model/services/fetchArticleByID/fetchArticleById";

interface ArticleProps {
    className?: string,
    id: string
}
const initialReducers: ReducersList = {
    articleDetails: articleReducer
}

export const Article = memo(({ className, id }: ArticleProps) => {
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleIsLoading)
    const error = useSelector(getArticleError)
    const data = useSelector(getArticleData)

    useEffect(()=>{
        dispatch(fetchArticleByID(id))
    }, [dispatch, id])
    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case AritcleBlockTypes.IMAGE:
            return (
                <ArticleImageBlockComponents
                    key={block.id}
                    block={block}
                    className={cls.block}
                />
            );
        case AritcleBlockTypes.TEXT:
            return (
                <ArticleTextBlockComponents
                    key={block.id}
                    className={cls.block}
                    block={block}
                />
            );
        default:
            return null;
        }
    }, []);


    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
            </>
        );
    } else if (error) {
        content = (
            <Text
                title={t('Произошла ошибка при загрузке статьи.')}
            />
        );
    } else {
        content = (
            <>
                <div className={cls.avatarWrapper}>
                    <Avatar
                        size={200}
                        src={data?.img}
                        className={cls.avatar}
                    />
                </div>
                <Text
                    className={cls.title}
                    title={data?.title}
                    text={data?.subtitle}
                />
                <div className={cls.articleInfo}>
                    <Text text={String(data?.views)} />
                </div>
                <div className={cls.articleInfo}>
                    <Text text={data?.createdAt} />
                </div>
                {data?.blocks.map(renderBlock)}
            </>
        );
    }
    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <div className={classNames(cls.Article)}>
                {content}
            </div>
        </DynamicModuleLoader>

    );
});

