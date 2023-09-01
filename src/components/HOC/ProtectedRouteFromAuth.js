import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { ROUTES } from "../../utils/constants";

const ProtectedRouteFromAuth = ({element}) => {

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