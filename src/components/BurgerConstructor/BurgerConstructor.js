import React, { useMemo } from 'react';
import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid'

import {
  ConstructorElement,
  CurrencyIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './BurgerConstructor.module.css';
import Modal from '../Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';


import { ADD_ITEM_TO_CONSTRUCTOR, getOrderNumber, SET_ORDER_MODAL_POS,  } from '../../services/actions';

import IngredientInConstructor from '../IngredientInConstructor/IngredientInConstructor';

function BurgerConstructor() {

    const { totalPrice, orderNubmer,isOrderViewing, bun, ingredients } = useSelector(store => ({
        orderNubmer: store.order,
        isOrderViewing: store.isOrderViewing,
        bun: store.bun,
        ingredients: store.ingrsInCart,
        totalPrice: (store.bun && store.bun.price * 2) +  store.ingrsInCart.reduce((acc, item)=> acc+=item?.price, 0)
    }));

    const dispatch = useDispatch();

    function addCustomID(obj) {
        const id = uuidv4();
        return {
            ...obj,
            idtd: id
        }
    }

    const [{isOver, itemType},dropTargetRef] =useDrop({
        accept: 'ingr',
        drop(item) {
            dispatch({
                type: ADD_ITEM_TO_CONSTRUCTOR,
                item1:  addCustomID(item)
            })
        },
        collect: (monitor=> ({
            isOver: monitor.isOver(),
            itemType: monitor.getItem()
        }))
    })

    function handleOrderButtonClick() {
        dispatch(getOrderNumber(ingredients));
        dispatch({
            type: SET_ORDER_MODAL_POS,
            pos: true
        })
    }

    function handleModalClose() {
        dispatch({
            type: SET_ORDER_MODAL_POS,
            pos: false
        });
    }

    return (
        <div ref={dropTargetRef} className={`mt-25 pl-3 ${styles.constructor}`}>
           {bun ? ( <ConstructorElement
                type="top"
                isLocked={true}
                text={bun.name}
                price={bun.price}
                thumbnail={bun.image}
                extraClass="ml-8 mb-4"
            /> ) : (<div className={`${isOver && itemType.type === 'bun' && styles.bunhovered} constructor-element constructor-element_pos_top ml-8 mb-4 constructor-element__text`}>Перетяните булку</div>)}
            {ingredients.length === 0 && <div className={`${isOver && itemType.type !== 'bun' && styles.bunhovered} constructor-element ml-8 constructor-element__text`}>Перетяните сюда элементы</div>}
            <ul className={styles.zakaz}>
                {
                    !!ingredients.length && ingredients.map((item, index) => (
                        <IngredientInConstructor key={`${item.id}-${index}`} {...item} index={index} />
                    ))
                }
            </ul>
            {bun ? (<ConstructorElement
                type="bottom"
                isLocked={true}
                text={bun.name}
                price={bun.price}
                thumbnail={bun.image}
                extraClass="ml-8 mt-4"
            />) : ( <div className={`${isOver && itemType.type === 'bun' && styles.bunhovered} constructor-element constructor-element_pos_bottom ml-8 mt-4 constructor-element__text`}>Перетяните булку</div> )}
 
            <div className={`pt-10 ${styles.total}`}>
                <div className={`mr-10 ${styles.price}`}>
                    <span className='text text_type_digits-medium mr-2'>{totalPrice}</span>
                    <CurrencyIcon />
                </div>
                <Button htmlType="submit" type="primary" size="large" onClick={handleOrderButtonClick}>
                    Оформить заказ
                </Button>
                {orderNubmer && isOrderViewing && (<Modal onEventCloseInModal={handleModalClose}>
                    <OrderDetails orderNubmer={orderNubmer} />
                </Modal>
                )}
            </div>
        </div>
    )
}

export default BurgerConstructor;