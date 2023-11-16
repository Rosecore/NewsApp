import { IArticle } from "./Article";

export interface ArticleDetailesSchema{
    isLoading: boolean,
    error?:string,
    data?: IArticle
}