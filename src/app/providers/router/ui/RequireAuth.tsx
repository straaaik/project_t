import { getUserData } from 'entitis/User';
import { useSelector } from 'react-redux';
import { useLocation, Navigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routerConfig/routeConfig';

function RequireAuth({ children }: { children: JSX.Element }) {
    const auth = useSelector(getUserData);
    const location = useLocation();

    if (!auth) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }

    return children;
}

export default RequireAuth;
