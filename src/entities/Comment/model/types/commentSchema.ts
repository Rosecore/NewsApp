import { IComment } from "./comment";


export interface commentSchema{
    isLoading:boolean,
    error:string,
    data:IComment[]
}