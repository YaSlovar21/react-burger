import styles from './OrderItemPage.module.css';


import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from '../services/hooks';
import { TOrder } from '../services/types/data';
import React, { useMemo } from 'react';

import OrderItemDetails from '../components/OrderItemDetails/OrderItemDetails';
import { WS_CONNECTION_CLOSED, WS_CONNECTION_START } from '../services/actions/wsActions';
import { WS_AUTH_CONNECTION_CLOSED, WS_AUTH_CONNECTION_START } from '../services/actions/wsAuthActions';


function OrderItemPage() {
    const { id } = useParams();
    console.log(id);
    const orders = useSelector(store => store.ordersFeedAll.orders);
    
    //Redux в данном спринте не трогаем
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch({
            type: WS_CONNECTION_START,
            url: 'wss://norma.nomoreparties.space/orders/all',
            isPrivate: false
        });

        return () => {
            dispatch({type: WS_CONNECTION_CLOSED});
        }
    }, [dispatch]);

 
    const orderData = useMemo(() => orders?.orders.find((item: TOrder) => item._id === id), [orders]);
    console.log(orders?.orders);
    if (orderData) {
        return (
            <div className={styles.formpagecontent}>
                <OrderItemDetails el={orderData} extraClass="orderdata_place_page" />
            </div>
        )
    } else {
        return (
            <></>
        )
    }
}

export default OrderItemPage;