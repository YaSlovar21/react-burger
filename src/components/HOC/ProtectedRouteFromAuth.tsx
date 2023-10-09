import { useSelector } from "../../services/hooks";
import { Navigate, useLocation } from "react-router-dom";
import { ROUTES } from "../../utils/constants";
import {ReactElement} from "react";

const ProtectedRouteFromAuth = ({element}: {element: ReactElement}) => {

    const isLoggedIn = useSelector(store => store.user.isLoggedIn);
    const location = useLocation();
    const from = location.state?.from || '/';
    console.log(from);
    
    if (isLoggedIn) {
        return (
          <Navigate
            to={from}
          />
        );
    } else {
        return (element);
    }
}

export default ProtectedRouteFromAuth;