import  { FC  } from 'react';
import { CurrencyIcon, FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from 'react-redux';
import { TIngredient } from '../../utils/ts-types';

import styles from './OrderItemCard.module.css';
import { Link, useLocation } from 'react-router-dom';



const OrderItemCard: FC<{el:any, page?:any}> = ({el, page}) => {
    const location = useLocation();

    const ingredientsAll: TIngredient[] = useSelector((store:any) => store.ingredients.items);
    console.log(ingredientsAll);

    const date = () => {
        return <FormattedDate date={new Date(el.createdAt)} />
      };

    const ingredients = el.ingredients.map((i:string) => {
       return ingredientsAll.find(item => item._id === i);
    })
    console.log(ingredients);
    return (
        <li className={`p-6 mb-4 ${styles.card}`} key={el._id}>
            <Link  className={`p-6 mb-4 ${styles.card__link}`} to={`${el._id}`} state={{ background: location, el: el }}  >
                <div className={styles.cardheader}>
                    <span className='text text_type_digits-default'>{`#${el.number}`}</span>
                    <span className='text text_type_main-default text_color_inactive'>{date()}</span>
                </div>
                <h2 className='mt-6 mb-6 text text_type_main-medium'>{el.name}</h2> 
                { page=== 'lk' && <p className='mt-2 mb-2 text text_type_main-default'>{el.status === 'done' ? 'Готов' : 'Готовится'}</p>}
                <ul className={styles.iconlist}>
                    {ingredients.slice(0,6).map((item:TIngredient, index: number) => {
                        return (
                            <li className={styles.iconingr} style={{right: `${index*16}px`, zIndex: `${10-index}`}} key={item?._id}>
                                {index===5 && ingredients.length !== index+1 && <span className={`text text_type_main-default ${styles.iconingr__overlay}`}>+{ingredients.length - 5}</span>}
                                <img className={styles.iconingr__img} src={item?.image} alt={item?.name} />
                            </li>
                        )
                    } )}
                </ul>
            </Link>
        </li>
    );
}

export default OrderItemCard;