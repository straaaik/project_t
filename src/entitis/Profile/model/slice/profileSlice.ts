import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Profile, ProfileSchema } from '../types/profile';
import { fetchProfileData } from 'entitis/Profile/services/fetchProfileData';

const initialState: ProfileSchema = { isLoading: false, readonly: true, data: undefined, error: undefined };

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchProfileData.fulfilled, (state, actions: PayloadAction<Profile>) => {
                state.data = actions.payload;
                state.isLoading = false;
            })
            .addCase(fetchProfileData.rejected, (state, actions) => {
                state.isLoading = false;
                state.error = actions.payload;
            });
    },
});

// Action creators are generated for each case reducer function
export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
