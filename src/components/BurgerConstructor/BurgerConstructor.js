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

import { makeOrderRequest } from '../../utils/burger-api';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_ITEM_TO_CONSTRUCTOR, getOrderNumber, UPDATE_ORDER_NUMBER } from '../../services/actions';

import { useDrop } from "react-dnd";

function BurgerConstructor() {

    
    const { totalPrice, orderNubmer, bun, ingredients } = useSelector(store => ({
        orderNubmer: store.order,
        bun: store.selectedIngregients.bun,
        ingredients: store.selectedIngregients.ingrs,
        totalPrice: (store.selectedIngregients.bun && store.selectedIngregients.bun.price * 2) +  store.selectedIngregients.ingrs.reduce((acc, item)=> acc+=item.price, 0)
    }))
    const dispatch = useDispatch();

    const [,dropTargetRef] =useDrop({
        accept: 'ingr',
        drop(item) {
            dispatch({
                type: ADD_ITEM_TO_CONSTRUCTOR,
                id: item.id
            })
        }
    })

    function handleOrderButtonClick() {
        dispatch(getOrderNumber(ingredients))
    }

    function handleModalClose() {
        dispatch({
            type: UPDATE_ORDER_NUMBER
        });
    }

    return (
        <div ref={dropTargetRef} className={`mt-25 pl-3 ${styles.constructor}`}>
           {bun && <ConstructorElement
                type="top"
                isLocked={true}
                text={bun.name}
                price={bun.price}
                thumbnail={bun.image}
                extraClass="ml-8"
            />}
            <ul className={styles.zakaz}>
                {
                    ingredients && ingredients.map(({_id, name, price, image}) => (
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
            {bun&& <ConstructorElement
                type="bottom"
                isLocked={true}
                text={bun.name}
                price={bun.price}
                thumbnail={bun.image}
                extraClass="ml-8"
            />}
 
            <div className={`pt-10 ${styles.total}`}>
                <div className={`mr-10 ${styles.price}`}>
                    <span className='text text_type_digits-medium mr-2'>{totalPrice}</span>
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