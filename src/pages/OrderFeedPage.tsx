
import OrderItemCard from '../components/OrderItemCard/OrderItemCard';
import { ordersAllWs } from '../utils/constants';
import styles from './OrderFeedPage.module.css';


function OrderFeedPage() {
    const lastTenOrders: any[] = ordersAllWs.orders.slice(0,10).map((item) => item.number);

    return (
        <>
            <h1 className={`text text_type_main-large mt-10 mb-5 ${styles.pagetitle}`}>Лента заказов</h1>
            <div className={styles.container}>
                <div className={styles.orders}>
                    {ordersAllWs.orders.map(item => {
                        return (
                            <OrderItemCard el={item} />
                        );
                    })}
                </div>
                <div className={styles.panel}>
                    <div>
                        <h2 className='text text_type_main-medium'>Готовы</h2>
                        <ul className={`mt-6 ${styles.numbers} ${styles.numbers_ready}`}>
                            {lastTenOrders.map(i => (
                                <li className='text text_type_digits-default' key={i}>{i}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className='text text_type_main-medium'>В работе</h2>
                        <ul className={`mt-6 ${styles.numbers}`}>
                            {lastTenOrders.map(i => (
                                <li className='text text_type_digits-default' key={i}>{i}</li>
                            ))}     
                        </ul>
                    </div>
                    <div className={styles.panel__total}>
                        <h2 className='text text_type_main-medium'>Выполнено за все время:</h2>
                        <p className={`text text_type_digits-large ${styles.text_shadow}`}>{ordersAllWs.total}</p>
                    </div>
                    <div className={styles.panel__total}>
                        <h2 className='text text_type_main-medium'>Выполнено за cегодня:</h2>
                        <p className={`text text_type_digits-large ${styles.text_shadow}`}>{ordersAllWs.totalToday}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OrderFeedPage;