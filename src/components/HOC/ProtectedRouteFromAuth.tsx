import { useSelector } from "../../services/hooks";
import { Navigate } from "react-router-dom";
import { ROUTES } from "../../utils/constants";
import {ReactElement} from "react";

const ProtectedRouteFromAuth = ({element}: {element: ReactElement}) => {

    const isLoggedIn = useSelector(store => store.user.isLoggedIn);
    
    if (isLoggedIn) {
        return (
          <Navigate
            to={ROUTES.main}
          />
        );
    } else {
        return (element);
    }
}

export default ProtectedRouteFromAuth;