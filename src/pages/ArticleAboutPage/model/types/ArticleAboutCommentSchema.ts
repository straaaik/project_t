import { EntityState } from '@reduxjs/toolkit';
import { IComment } from 'entitis/Comment';

export interface ArticleAboutCommentSchema extends EntityState<IComment> {
    isLoading?: boolean;
    error?: string;
}
