import React from 'react';

import styles from './OrderDetails.module.css';

import successLogo from '../../images/done.svg';

function OrderDetails({orderNubmer}: {orderNubmer: number}) {
    return (
        <div className={`p-30 ${styles.wrapper}`}>
         <h2 className={`text text_type_digits-large ${styles.zakaznumber}`}>{orderNubmer}</h2>
        <p className='text text_type_main-medium mt-8'>индентификатор заказа</p>
        <img className={`mt-15 mb-15 ${styles.successlogo}`} src={successLogo} alt='заказ принят' />
        <p className='text text_type_main-default'>Ваш заказ начали готовить</p>
        <p className='text text_type_main-default text_color_inactive mt-2'>Дождитесь готовности на орбитальной станции</p>
        </div>
    );
}


export default OrderDetails;