import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';

import {
  ConstructorElement,
  DragIcon,
  CurrencyIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';


import styles from './BurgerConstructor.module.css';
import Modal from '../Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';
import { IngrContext } from '../../services/ingrContext';
import { makeOrderRequest } from '../../utils/burger-api';

function BurgerConstructor() {

    const [orderNubmer, setOrderNumber] = React.useState(null);

    const { bun, ingredients } = useMemo(() => {
        return {
          bun: ingrState.find(item => item.type === 'bun'),
          ingredients: ingrState.filter(item => item.type !== 'bun' && Math.round(Math.random()) === 1),
        };
      }, [ingrState]);

    function handleOrderButtonClick() {
        makeOrderRequest(ingredients.concat(bun, bun))
            .then(order => {
                console.log(order);
                if(order.success) {
                    setOrderNumber(order.order.number);
                    //setModalOrderIsOpen(true);
                }
                else{
                    Promise.reject(`Не получилось оформить заказ. Ошибка ${order.status}`)
                }
            })
            .catch(e => console.log(e));
    }

    function handleModalClose() {
        //setModalOrderIsOpen(false);
        setOrderNumber(null)
    }
    
    const totalSum = useMemo(() => {
        return bun &&  bun.price * 2 + ingredients.reduce((acc, item)=> acc+= item.price, 0)
    }, [bun, ingredients]);

    return (
        ingrState.length && <div className={`mt-25 pl-3 ${styles.constructor}`}>
           <ConstructorElement
                type="top"
                isLocked={true}
                text={bun.name}
                price={bun.price}
                thumbnail={bun.image}
                extraClass="ml-8"
            />
            <ul className={styles.zakaz}>
                {
                    ingredients.map(({_id, name, price, image}) => (
                        <li key={_id}>
                            <DragIcon type="primary" />
                            <ConstructorElement
                                text={name}
                                price={price}
                                thumbnail={image}
                                extraClass="ml-2 mr-2"
                            />
                        </li>
                    )) 
                }
            </ul>
            <ConstructorElement
                type="bottom"
                isLocked={true}
                text={bun.name}
                price={bun.price}
                thumbnail={bun.image}
                extraClass="ml-8"
            />
 
            <div className={`pt-10 ${styles.total}`}>
                <div className={`mr-10 ${styles.price}`}>
                    <span className='text text_type_digits-medium mr-2'>{totalSum}</span>
                    <CurrencyIcon />
                </div>
                <Button htmlType="submit" type="primary" size="large" onClick={handleOrderButtonClick}>
                    Оформить заказ
                </Button>
                {orderNubmer && (<Modal onEventCloseInModal={handleModalClose}>
                    <OrderDetails orderNubmer={orderNubmer} />
                </Modal>
                )}
            </div>
        </div>
    )
}


//BurgerConstructor.propTypes = {
    //data: PropTypes.arrayOf(burgerPropTypes.isRequired).isRequired
//};

export default BurgerConstructor;