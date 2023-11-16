import { StateSchema } from 'app/provider/StoreProvider';

export const getArticleData = (state: StateSchema) => state?.articleDetails?.data
export const getArticleError = (state: StateSchema) => state?.articleDetails?.error
export const getArticleIsLoading = (state: StateSchema) => state?.articleDetails?.isLoading