import { FC, ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = { [key in StateSchemaKey]?: Reducer };

interface DynamicLoaderProps {
    reducers: ReducersList;
    children: ReactNode;
    removeAfterUnmount: boolean;
}

export const DynamicLoader: FC<DynamicLoaderProps> = ({ children, reducers, removeAfterUnmount }: DynamicLoaderProps) => {
    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach(([key, reducer]) => {
            store.reducerManager.add(key as StateSchemaKey, reducer);
            dispatch({ type: `INIT ${key}` });
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([key]) => {
                    store.reducerManager.remove(key as StateSchemaKey);
                    dispatch({ type: `REMOVE ${key}` });
                });
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
};
