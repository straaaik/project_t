import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { IComment } from 'entitis/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<IComment[], string | undefined, ThunkConfig<string>>(
    'article/fetchCommentsByArticleId',
    async (articleId, { extra, rejectWithValue }) => {
        if (!articleId) {
            return rejectWithValue('error');
        }

        try {
            const response = await extra.api.get<IComment[]>('/comments', {
                params: {
                    articleId,
                    _expand: 'user',
                },
            });

            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    }
);
