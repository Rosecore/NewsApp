export interface IArticle {
    id: string,
    title: string,
    subtitle: string,
    img: string,
    views: number,
    createdAt: string,
    type: ArticleTypes,
    blocks: ArticleBlock[]
}

export type ArticleTypes = {
    ANIME: "anime",
    MANGA: "manga"
}
export type ArticleBlock = ArticleCodeBlock | ArticleTextBlock | ArticleImageBlock

export interface ArticleCodeBlock extends ArticleBlockBase {
    type:AritcleBlockTypes.CODE,
    code: string
}
export interface ArticleImageBlock extends ArticleBlockBase {
    type:AritcleBlockTypes.IMAGE,
    src:string,
    title:string
}
export interface ArticleTextBlock extends ArticleBlockBase{
    type:AritcleBlockTypes.TEXT,
    title?:string,
    paragraphs:string[]
}
export interface ArticleBlockBase {
    id: string,
    type:AritcleBlockTypes
}
export enum AritcleBlockTypes {
    CODE = "CODE",
    TEXT = "TEXT",
    IMAGE = "IMAGE"
}