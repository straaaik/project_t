import { EnhancedStore } from '@reduxjs/toolkit';
import { CounterSchema } from 'entitis/Counter';
import { UserSchema } from 'entitis/User';
import { LoginSchema } from 'features/AuthByUsername';
import { ReducerManager } from './reducerManager';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    loginForm?: LoginSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}
