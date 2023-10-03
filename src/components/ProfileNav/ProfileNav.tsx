import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../utils/constants";
import styles from './ProfileNav.module.css';
import { logout } from '../../services/actions/user';

function ProfileNav() {

    function handleLogout() {
        dispatch(logout());
    }
    const dispatch:any = useDispatch();

    return (
        <div className={`mr-15 ${styles.menu}`}>
            <ul className={styles.navlist}>
                <li className={styles.navlist__item}><NavLink end to={ROUTES.profile} className={({isActive}) => `text text_type_main-medium ${styles.navlink} ${isActive && styles.active}`}>Профиль</NavLink></li>
                <li className={styles.navlist__item}><NavLink to={ROUTES.profileOrders} className={({isActive}) => `text text_type_main-medium ${styles.navlink} ${isActive && styles.active}`}>История заказов</NavLink></li>
                <li className={`text text_type_main-medium text_color_inactive ${styles.navlist__item} ${styles.logout}`} onClick={handleLogout}>Выход</li>
            </ul>
            <p className="text text_type_main-default text_color_inactive mt-20">В этом разделе вы можете изменить свои персональные данные</p>
        </div>
    );
}

export default ProfileNav;