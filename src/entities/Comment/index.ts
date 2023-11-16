import { CommentList } from "./ui/CommentList/CommentList";
import { getCommentsData, getCommentsError, getCommentsIsLoading } from "./model/selectors/commentSelectors";
import { fetchComments } from "./model/services/fetchComments";

export { CommentList, fetchComments, getCommentsData, getCommentsError, getCommentsIsLoading }