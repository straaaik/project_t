import { getUserData } from 'entitis/User';
import { memo, Suspense, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from 'shared/config/routerConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

function AppRouter() {
    const isAuth = useSelector(getUserData);

    const routs = useMemo(() => {
        return Object.values(routeConfig).filter((item) => {
            if (!isAuth && item.authOnly) return false;
            return true;
        });
    }, [isAuth]);

    return (
        <Routes>
            {routs.map(({ element, path }) => (
                <Route
                    key={path}
                    path={path}
                    element={
                        <Suspense fallback={<PageLoader />}>
                            <div className="page-wrapper">{element}</div>
                        </Suspense>
                    }
                />
            ))}
        </Routes>
    );
}

export default memo(AppRouter);
