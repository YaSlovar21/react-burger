import { useSelector } from "../../services/hooks";
import { Navigate } from "react-router-dom";
import { ROUTES } from "../../utils/constants";

import {ReactElement} from "react";

const ProtectedRouteWithAuth = ({element }: {element: ReactElement}) => {

    const isLoggedIn = useSelector(store => store.user.isLoggedIn);

    return (
       isLoggedIn  ? element : <Navigate to={ROUTES.login} />
    );
}

export default ProtectedRouteWithAuth;