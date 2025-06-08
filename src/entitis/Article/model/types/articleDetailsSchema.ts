import { Article } from './types';

export interface ArticleDetailsSchema {
    data?: Article;
    isLoading: boolean;
    error?: string;
}
