import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from './index';
import AppRouter from './providers/router';
import { Suspense, useEffect } from 'react';
import { Sidebar } from 'widgets/Sidebar';
import { Navbar } from 'widgets/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInited, userActions } from 'entitis/User';

export default function App() {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    const userInited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(userActions.initialAuth());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    {userInited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
}
