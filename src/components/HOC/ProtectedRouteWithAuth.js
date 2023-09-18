import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { ROUTES } from "../../utils/constants";

const ProtectedRouteWithAuth = ({element }) => {

    const isLoggedIn = useSelector(store => store.user.isLoggedIn);

    return (
       isLoggedIn  ? element : <Navigate to={ROUTES.login} />
    );
}

export default ProtectedRouteWithAuth;