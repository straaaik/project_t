import { lazy } from 'react';

export const ArticleAboutPageAsync = lazy(
    () =>
        new Promise((res) => {
            // @ts-ignore
            setTimeout(() => res(import('./ArticleAboutPage')), 1500);
        })
);
