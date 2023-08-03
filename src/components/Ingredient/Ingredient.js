import React from 'react';
import PropTypes from 'prop-types';

import {
    CurrencyIcon,
    Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from './Ingredient.module.css';

function Ingredient({name, image, price }) {
    return (
        <li className={`${styles.ingredient}`}>
            <Counter count={1} size="default" extraClass='m-1 ingredient__count' />
            <img src={image} alt={name} />
            <p className={`text text_type_digits-default mt-2 mb-2 ${styles.ingredient__price}`}><span className='mr-2'>{price}</span> <CurrencyIcon type="primary" /></p>
            <h3 className={`text text_type_main-default ${styles.ingredient__name}`}>{name}</h3>
        </li>
    );
}

Ingredient.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};

export default Ingredient;