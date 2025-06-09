import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { IComment } from 'entitis/Comment';
import { ArticleAboutCommentSchema } from '../types/ArticleAboutCommentSchema';
import { fetchCommentsByArticleId } from '../services/fetchCommentByArticleId';

// Since we don't provide `selectId`, it defaults to assuming `entity.id` is the right field
const commentsAdapter = createEntityAdapter<IComment>({
    selectId: (comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>((state) => state.articleDetailsComments || commentsAdapter.getInitialState());

const articleAboutCommentSlice = createSlice({
    name: 'articleAboutCommentSlice',
    initialState: commentsAdapter.getInitialState<ArticleAboutCommentSchema>({
        ids: [],
        entities: {},
        isLoading: false,
        error: undefined,
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (state, actions: PayloadAction<IComment[]>) => {
                state.isLoading = false;
                commentsAdapter.setAll(state, actions.payload);
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, actions) => {
                state.isLoading = false;
                state.error = actions.payload;
            });
    },
});

export const { reducer: articleAboutCommentReducer } = articleAboutCommentSlice;
