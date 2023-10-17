import React from 'react';

import styles from './IngredientDetails.module.css';
import { TIngredient } from '../../services/types/data';

function IngredientDetails({el, extraClass}: {el: TIngredient, extraClass?: string}) {
    return (
        el && <div className={`p-10 ${styles.wrapper} ${extraClass && styles.ingredient_place_page} ingredients-details`}>
            <h2 className={`text text text_type_main-large mt-4 ${!extraClass && styles.detailstitle}`} >Детали заказа</h2>
            <img className={styles.image} src={el.image_large} alt={el.name} />
            <p className='text text_type_main-medium'>{el.name}</p>
            <ul className={`mt-8 mb-5 ${styles.charslist}`}>
                <li className={`mr-5 ${styles.charslist__item}`}>
                    <h3 className='text text_type_main-default text_color_inactive'>Калории,ккал</h3>
                    <p className='text text_type_main-default text_color_inactive mt-2'>{el.calories}</p>
                </li>
                <li className={`mr-5 ${styles.charslist__item}`}>
                    <h3 className='text text_type_main-default text_color_inactive'>Белки, г</h3>
                    <p className='text text_type_main-default text_color_inactive mt-2'>{el.proteins}</p>
                </li>
                <li className={`mr-5 ${styles.charslist__item}`}>
                    <h3 className='text text_type_main-default text_color_inactive'>Жиры, г</h3>
                    <p className='text text_type_main-default text_color_inactive mt-2'>{el.fat}</p>
                </li>
                <li className={`${styles.charslist__item}`}>
                    <h3 className='text text_type_main-default text_color_inactive'>Углеводы, г</h3>
                    <p className='text text_type_main-default text_color_inactive mt-2'>{el.carbohydrates}</p>
                </li>
            </ul>
        </div>
    );
}

export default IngredientDetails;