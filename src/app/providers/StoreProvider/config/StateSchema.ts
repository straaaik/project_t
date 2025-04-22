import { EnhancedStore } from '@reduxjs/toolkit';
import { CounterSchema } from 'entitis/Counter';
import { UserSchema } from 'entitis/User';
import { LoginSchema } from 'features/AuthByUsername';
import { ReducerManager } from './reducerManager';
import { ProfileSchema } from 'entitis/Profile';
import { AxiosInstance } from 'axios';
import { NavigateOptions, To } from 'react-router-dom';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
    navigate: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
}
