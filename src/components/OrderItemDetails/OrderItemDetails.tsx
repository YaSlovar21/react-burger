import React, { useEffect, useMemo } from 'react';
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { FC } from 'react';
import { useSelector } from '../../services/hooks';
import { TIngredient, TOrder } from '../../services/types/data';
import styles from './OrderItemDetails.module.css';
import { useDispatch } from 'react-redux';
import { WS_CONNECTION_CLOSED, WS_CONNECTION_START } from '../../services/actions/wsActions';


const OrderItemDetails: FC<{el: TOrder, page?:string, extraClass?: string}> = ({el, page, extraClass}) => {
    
    const dispatch = useDispatch();
    const ingredientsAll: TIngredient[] = useSelector(store => store.ingredients.items);
    
    const ingredients: Array<TIngredient> | undefined = ingredientsAll && el ? el.ingredients.map(i => {
        return ingredientsAll.find(item => item._id === i) as TIngredient;
     }) : undefined;
    //const ingrToRender = Array.from(new Set(ingredients)) as TIngredient[];
     console.log(ingredients);

    const orderPrice = useMemo(() => ingredients?.map(i=> i?.price).reduce((sum, item) => sum + item, 0), [ingredients]) 

    
    if (ingredientsAll.length)
    {
    
    return (
        <div className={`p-10 ${styles.orderdata} `}>
            <p className={`${extraClass ==='orderdata_place_page' ? styles.orderdata_place_page : ''} text mt-6 text_type_digits-default`}>{`#${el.number} `}</p>
            <h2 className='mt-6 mb-6 text text_type_main-medium'>{el.name}</h2> 
            <h3 className='mt-6 mb-6 text text_type_main-medium'>Состав:</h3>
            <ul className={styles.ingrlist}>
                  
                    {Array.from(new Set(ingredients)).map((item) => {
                        
                        return (
                            <li className={`mb-4 ${styles.ingrlist__item}`} key={item._id}>
                                <img className={styles.iconingr__img} src={item.image} alt={item.name} />
                                <h4 className='text text_type_main-default ml-4'>{item.name}</h4>
                                <div className={`mr-2 ${styles.inglist__price}`}>
                                    <p className='text text_type_digits-default mr-2'>{ingredients?.filter(ingr => ingr?._id === item?._id).length}{' '}x{' '}{item?.price}</p>
                                    <CurrencyIcon type='primary'/>
                                </div>
                            </li>
                        )
            } )}
            </ul>
            <div className={`mt-10 mb-0 ${styles.orderdata__footer}`}>
                <div className='text text_type_main-default text_color_inactive'><FormattedDate date={new Date(el.createdAt)}/></div>
                <div className={`${styles.inglist__price} text text_type_digits-default ml-2`}><span className='mr-2'>{orderPrice? orderPrice: 0}</span><CurrencyIcon type='primary'/></div>
            </div>
        </div>
    )} else {
        return (
            <></>
        )
    };
}

export default OrderItemDetails;