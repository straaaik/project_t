import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Profile, ProfileSchema } from '../types/profile';
import { fetchProfileData } from 'entitis/Profile/services/fetchProfileData';
import { updateProfileData } from 'entitis/Profile/services/updateProfileData';

const initialState: ProfileSchema = { isLoading: false, readonly: true, data: undefined, error: undefined };

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        updateReadOnly: (state, actions: PayloadAction<boolean>) => {
            state.readonly = actions.payload;
        },
        updateData: (state, actions: PayloadAction<Profile>) => {
            state.form = {
                ...state.form,
                ...actions.payload,
            };
        },
        cancelEdit: (state) => {
            state.readonly = true;
            state.form = state.data;
            state.validateErrors = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchProfileData.fulfilled, (state, actions: PayloadAction<Profile>) => {
                state.data = actions.payload;
                state.form = actions.payload;
                state.isLoading = false;
            })
            .addCase(fetchProfileData.rejected, (state, actions) => {
                state.isLoading = false;
                state.error = actions.payload;
            })
            .addCase(updateProfileData.pending, (state) => {
                state.validateErrors = undefined;
                state.isLoading = true;
            })
            .addCase(updateProfileData.fulfilled, (state, actions: PayloadAction<Profile>) => {
                state.data = actions.payload;
                state.form = actions.payload;
                state.readonly = true;
                state.isLoading = false;
            })
            .addCase(updateProfileData.rejected, (state, actions) => {
                state.isLoading = false;
                state.validateErrors = actions.payload;
            });
    },
});

// Action creators are generated for each case reducer function
export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
