import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from './index';
import AppRouter from './providers/router';
import { Suspense, useState } from 'react';
import { Sidebar } from 'widgets/Sidebar';
import { Navbar } from 'widgets/Navbar';
import { Modal } from 'shared/ui/Modal/Modal';

export default function App() {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}
