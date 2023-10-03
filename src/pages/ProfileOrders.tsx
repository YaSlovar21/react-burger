import OrderItemCard from "../components/OrderItemCard/OrderItemCard";
import ProfileNav from "../components/ProfileNav/ProfileNav";
import { ordersAllWs } from "../utils/constants";
import styles from './ProfileOrders.module.css';

function ProfileOrders() {
    const lastTenOrders: any[] = ordersAllWs.orders.slice(0,10).map((item) => item.number);
    return (
        <div className={styles.formpagecontent}> 
        
            {/* меню */}
            <ProfileNav />
            <div className={styles.orders}>
                    {ordersAllWs.orders.map(item => {
                        return (
                            <OrderItemCard el={item} page='lk' />
                        );
                    })}
            </div>

        </div>
    )
}

export default ProfileOrders;