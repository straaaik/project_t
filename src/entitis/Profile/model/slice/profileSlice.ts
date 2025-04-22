import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { ProfileSchema } from '../types/profile';

const initialState: ProfileSchema = { isLoading: false, readonly: true, data: undefined, error: undefined };

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
});

// Action creators are generated for each case reducer function
export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
