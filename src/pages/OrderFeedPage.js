
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import OrderItemCard from '../components/OrderItemCard/OrderItemCard';
import { WS_CONNECTION_CLOSED, WS_CONNECTION_START } from '../services/actions/wsActions';
import { ordersAllWs } from '../utils/constants';
import styles from './OrderFeedPage.module.css';


function OrderFeedPage() {
    //const lastTenOrders: any[] = ordersAllWs.orders.slice(0,10).map((item) => item.number);
    const ordersAll = useSelector((store) => store.ordersFeedAll.orders);
    //const lastTenOrders = ordersAll.slice(0,10);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: WS_CONNECTION_START});
        return () => {
            dispatch({type: WS_CONNECTION_CLOSED});
        }
      }, [dispatch]);

    const prepairing = useMemo(()=> ordersAll?.orders.filter(order=> order.status !== 'done'), [ordersAll]);
    const ready = useMemo(() => ordersAll?.orders.filter(order=> order.status === 'done'), [ordersAll] )

    return (
    
        ordersAll && <>
        
            <h1 className={`text text_type_main-large mt-10 mb-5 ${styles.pagetitle}`}>Лента заказов</h1>
            <div className={styles.container}>
                <div className={styles.orders}>
                    {ordersAll.orders.map(item => {
                        return (
                            <OrderItemCard page='lk' el={item} />
                        );
                    })}
                </div>
                <div className={styles.panel}>
                    <div>
                        <h2 className='text text_type_main-medium'>Готовы</h2>
                        <ul className={`mt-6 ${styles.numbers} ${styles.numbers_ready}`}>
                            {ready.slice(0,10).map(i => (
                                <li className='text text_type_digits-default' key={i._id}>{i.number}</li>
                            ))}  
                        </ul>
                    </div>
                    <div>
                        <h2 className='text text_type_main-medium'>В работе</h2>
                        <ul className={`mt-6 ${styles.numbers}`}>
                            {prepairing.slice(0,10).map(i => (
                                <li className='text text_type_digits-default' key={i._id}>{i.number}</li>
                            ))}     
                        </ul>
                    </div>
                    <div className={styles.panel__total}>
                        <h2 className='text text_type_main-medium'>Выполнено за все время:</h2>
                        <p className={`text text_type_digits-large ${styles.text_shadow}`}>{ordersAll.total}</p>
                    </div>
                    <div className={styles.panel__total}>
                        <h2 className='text text_type_main-medium'>Выполнено за cегодня:</h2>
                        <p className={`text text_type_digits-large ${styles.text_shadow}`}>{ordersAll.totalToday}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OrderFeedPage;