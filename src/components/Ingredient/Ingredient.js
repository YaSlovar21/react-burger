import React from 'react';
import PropTypes from 'prop-types';

import { useDrag } from "react-dnd";

import {
    CurrencyIcon,
    Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from './Ingredient.module.css';
import { burgerPropTypes } from '../../utils/prop-types';

function Ingredient({el, onIngredientClick }) {

    function handleIngredientClick() {
        onIngredientClick(el);
    }

    const [, dragRef] = useDrag({
        type: 'ingr',//el.type === 'bun' ? 'bun' : 'ingredient',
        item: {
            id: el._id,
            wii: el.type
        }
    });

    return (
        <li ref={dragRef} className={`${styles.ingredient}`} onClick={handleIngredientClick}>
            <Counter count={1} size="default" extraClass='m-1 ingredient__count' />
            <img src={el.image} alt={el.name} />
            <p className={`text text_type_digits-default mt-2 mb-2 ${styles.ingredient__price}`}><span className='mr-2'>{el.price}</span> <CurrencyIcon type="primary" /></p>
            <h3 className={`text text_type_main-default ${styles.ingredient__name}`}>{el.name}</h3>
        </li>
    );
}

Ingredient.propTypes = {
    el: burgerPropTypes.isRequired,
    onIngredientClick: PropTypes.func.isRequired,
};

export default Ingredient;