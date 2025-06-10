import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../model/types/profile';

export const fetchProfileData = createAsyncThunk<Profile, string | undefined, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (profileID, { extra, rejectWithValue }) => {
        if (!profileID) return rejectWithValue('error');

        try {
            const response = await extra.api.get<Profile>(`/profile/${profileID}`);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    }
);
