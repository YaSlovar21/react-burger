import { useSelector } from "../../services/hooks";
import { Navigate, useLocation } from "react-router-dom";
import { ROUTES } from "../../utils/constants";

import {ReactElement} from "react";

const ProtectedRouteWithAuth = ({element }: {element: ReactElement}) => {

    const location = useLocation();
    const isLoggedIn = useSelector(store => store.user.isLoggedIn);

    return (
       isLoggedIn  ? element : <Navigate to={ROUTES.login} state={{ from: location}} />
    );
}

export default ProtectedRouteWithAuth;