import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserData } from 'entitis/User';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticleDetailsData } from 'entitis/Article';
import { fetchCommentsByArticleId } from './fetchCommentByArticleId';

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
    'articleAboutPage/addCommentForArticle',
    async (textComment, { extra, rejectWithValue, getState, dispatch }) => {
        const userData = getUserData(getState());
        const article = getArticleDetailsData(getState());

        if (!userData || !textComment || !article) {
            return rejectWithValue('no data');
        }

        try {
            const response = await extra.api.post<Comment>('/comments', {
                articleId: article.id,
                userId: userData.id,
                text: textComment,
            });
            if (!response.data) {
                throw new Error();
            }

            dispatch(fetchCommentsByArticleId(article.id));

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    }
);
