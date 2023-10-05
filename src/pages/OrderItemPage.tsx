import styles from './OrderItemPage.module.css';


import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TOrder } from '../utils/ts-types';
import React, { useMemo } from 'react';
import { getIngregients } from '../services/actions/get-ingredients';

import OrderItemDetails from '../components/OrderItemDetails/OrderItemDetails';
import { WS_CONNECTION_CLOSED, WS_CONNECTION_START } from '../services/actions/wsActions';


function OrderItemPage() {
    const { id } = useParams();
    console.log(id);
    const orders = useSelector((store: any) => store.ordersFeedAll.orders);
    //Redux в данном спринте не трогаем
    const dispatch:any = useDispatch();
    React.useEffect(() => {
        dispatch({type: WS_CONNECTION_START});
        return () => {
            dispatch({type: WS_CONNECTION_CLOSED});
        }
      }, [dispatch]);


    React.useEffect(()=> {
      dispatch(getIngregients());
    }, [dispatch]);

    const orderData = useMemo(()=> orders?.orders.find((item: TOrder) => item._id === id), [id, orders]);
    console.log(orders?.orders)
    return (
        orderData && <div className={styles.formpagecontent}>
            <OrderItemDetails el={orderData} extraClass="orderdata_place_page" />
        </div>
    )
}

export default OrderItemPage;