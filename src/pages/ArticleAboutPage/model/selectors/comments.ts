import { StateSchema } from 'app/providers/StoreProvider';

export const getCommentsLoading = (state: StateSchema) => state.articleDetailsComments?.isLoading;
export const getCommentsError = (state: StateSchema) => state.articleDetailsComments?.error;
