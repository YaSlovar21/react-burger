import React from "react";
import { useDispatch, useSelector } from "../services/hooks";
import OrderItemCard from "../components/OrderItemCard/OrderItemCard";
import ProfileNav from "../components/ProfileNav/ProfileNav";
import { ordersAllWs } from "../utils/constants";
import styles from './ProfileOrders.module.css';

import { getIngregients } from "../services/actions/get-ingredients";
import { TOrder } from "../services/types/data";
import { WS_AUTH_CONNECTION_CLOSED, WS_AUTH_CONNECTION_START } from "../services/actions/wsAuthActions";

function ProfileOrders() {
    
    const dispatch = useDispatch();

    const ordersAll = useSelector((store) => store.ordersOfUser.orders);
    React.useEffect(() => {

        dispatch({
            type: WS_AUTH_CONNECTION_START,
            url: 'wss://norma.nomoreparties.space/orders',
            isPrivate: true
        });
        dispatch(getIngregients());
        return () => {
            dispatch({type: WS_AUTH_CONNECTION_CLOSED});
        }
    }, [dispatch]);
    if(ordersAll && ordersAll.success) {
    return (
         <div className={styles.formpagecontent}> 
        
            {/* меню */}
            <ProfileNav />
            <div className={styles.orders}>
                    {ordersAll.orders.reverse().map((item:TOrder) => {
                        return (
                            <OrderItemCard key={`card-${item._id}`} el={item} page='lk' />
                        );
                    })}
            </div>

        </div>
    )} else {
        return (
            <></>
        )
    }
}

export default ProfileOrders;