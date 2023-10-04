
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { FC, FunctionComponent, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { TIngredient } from '../../utils/ts-types';
import styles from './OrderItemDetails.module.css';


const OrderItemDetails: FC<{el: any, page?:any}> = ({el, page}) => {
    const ingredientsAll: TIngredient[] = useSelector((store:any) => store.ingredients.items);
    const ingredients = el.ingredients.map((i:string) => {
        return ingredientsAll.find(item => item._id === i);
     });

    
    return (
        <div>
            <span className='text text_type_digits-default'>{`#${el.number}`}</span>
            <h2 className='mt-6 mb-6 text text_type_main-medium'>{el.name}</h2> 
            <h3 className='mt-6 mb-6 text text_type_main-medium'>Состав:</h3>
            <ul className={styles.ingrlist}>
                    {ingredients.map((item:TIngredient, index: number) => {
                        return (
                            <li className={styles.ingrlist__item} key={item?._id}>
                                <img className={styles.iconingr__img} src={item?.image} alt={item?.name} />
                                <h4>{item.name}</h4>
                                <div className='inglist__price'>
                                    <CurrencyIcon type='primary' />
                                </div>
                            </li>
                        )
            } )}
            </ul>
            
        </div>
    );
}

export default OrderItemDetails;