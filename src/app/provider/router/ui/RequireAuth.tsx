import { getUserAuthData } from "entities/User";
import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";
import { RoutePath } from "shared/config/routeconfig/routeconfig";

export const RequireAuth = ({ children }: { children: JSX.Element })=> {
    let auth = useSelector(getUserAuthData);
    let location = useLocation();
  
    if (!auth) {

        return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }
  
    return children;
}