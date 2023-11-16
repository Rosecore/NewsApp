import { StateSchema } from 'app/provider/StoreProvider';

export const getCommentsData = (state: StateSchema) => state?.comments?.data
export const getCommentsError = (state: StateSchema) => state?.comments?.error
export const getCommentsIsLoading = (state: StateSchema) => state?.comments?.isLoading