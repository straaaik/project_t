import { createAsyncThunk } from '@reduxjs/toolkit';
import { Article } from '../types/types';
import { ThunkConfig } from 'app/providers/StoreProvider';

export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig<string>>('article/fetchArticleById', async (id, { extra, rejectWithValue }) => {
    try {
        const response = await extra.api.get<Article>(`/articles/${id}`);

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        return rejectWithValue('error');
    }
});
