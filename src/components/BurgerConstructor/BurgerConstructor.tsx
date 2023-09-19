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




import IngredientInConstructor from '../IngredientInConstructor/IngredientInConstructor';
import { getOrderNumber, SET_ORDER_MODAL_POS } from '../../services/actions/send-order';
import { ADD_ITEM_TO_CONSTRUCTOR } from '../../services/actions/constructor';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../utils/constants';
import { TIngredient } from '../../utils/ts-types';

function BurgerConstructor() {


    const isLoggedIn = useSelector((store:any) => store.user.isLoggedIn);
    const navigate = useNavigate();

    const orderNubmer = useSelector((store:any)  => store.order.number);
    const isOrderViewing = useSelector((store:any)  => store.order.isOrderViewing);
    const bun = useSelector((store:any)  => store.cart.bun);
    const ingredients = useSelector((store:any)  => store.cart.ingrsInCart);
    
    const totalPrice: number = (bun && bun.price * 2) + ingredients.reduce((acc:number, item:TIngredient)=> acc+=item?.price, 0);

    const dispatch: any = useDispatch();

    function addCustomID(obj: object) {
        const id = uuidv4();
        return {
            ...obj,
            idtd: id
        }
    }

    //ловим ингредиент и добавляем его в корзину со спец id
    const [{isOver, itemType},dropTargetRef] =useDrop({
        accept: 'ingr',
        drop(item: TIngredient) {
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
        //булка+ингрс+булка
        if (isLoggedIn) {
            const ingredientsArr = bun ? [].concat(bun, ingredients, bun) : [].concat(ingredients);
            dispatch(getOrderNumber(ingredientsArr));
            dispatch({
                type: SET_ORDER_MODAL_POS,
                pos: true
            })
        } else navigate(ROUTES.login)
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
                    !!ingredients.length && ingredients.map((item: TIngredient & {idtd: string}, index: number) => (
                        <IngredientInConstructor key={`${item._id}-${index}`} {...item} index={index} />
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
                    <CurrencyIcon type="primary"/>
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