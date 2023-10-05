import React from "react";
import { useDispatch, useSelector } from "react-redux";
import OrderItemCard from "../components/OrderItemCard/OrderItemCard";
import ProfileNav from "../components/ProfileNav/ProfileNav";
import { ordersAllWs } from "../utils/constants";
import styles from './ProfileOrders.module.css';
import { WS_CONNECTION_CLOSED, WS_CONNECTION_START } from '../services/actions/wsActions';
import { getIngregients } from "../services/actions/get-ingredients";
import { TOrder } from "../utils/ts-types";
import { WS_AUTH_CONNECTION_CLOSED, WS_AUTH_CONNECTION_START } from "../services/actions/wsAuthActions";

function ProfileOrders() {
    const lastTenOrders: any[] = ordersAllWs.orders.slice(0,10).map((item) => item.number);
    const dispatch = useDispatch();

    const ordersAll = useSelector((store:any) => store.ordersOfUser.orders);
    React.useEffect(() => {

        dispatch({type: WS_AUTH_CONNECTION_START, secure: true});
        dispatch<any>(getIngregients());
        return () => {
            dispatch({type: WS_AUTH_CONNECTION_CLOSED, secure: true});
        }
    }, [dispatch]);

    return (
         ordersAll && ordersAll.success && <div className={styles.formpagecontent}> 
        
            {/* меню */}
            <ProfileNav />
            <div className={styles.orders}>
                    {ordersAll.orders.map((item:TOrder) => {
                        return (
                            <OrderItemCard el={item} page='lk' />
                        );
                    })}
            </div>

        </div>
    )
}

export default ProfileOrders;