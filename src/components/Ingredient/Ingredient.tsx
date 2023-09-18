import React, { FC, useEffect,ReactElement  } from 'react';
import PropTypes from 'prop-types';

import { useDrag } from "react-dnd";

import {
    CurrencyIcon,
    Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from './Ingredient.module.css';
import { burgerPropTypes } from '../../utils/prop-types';
import {  useSelector } from 'react-redux';
import { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TIngredient } from '../../utils/ts-types';

interface IIngrProps {
    el: TIngredient;
    onIngredientClick: (el: TIngredient) => any;
}

const Ingredient: FC<IIngrProps> = ({el, onIngredientClick }) => {

    const location = useLocation();

    function handleIngredientClick() {
        onIngredientClick(el);
    }

    const [, dragRef] = useDrag({
        type: 'ingr', 
        item: el 
        
    });

    const ingrs: TIngredient[] = useSelector((store:any) => store.cart.ingrsInCart);
    const bunInConstr: TIngredient = useSelector((store:any) => store.cart.bun);

    const ingredientsInConstructor: TIngredient[] = ingrs.concat(bunInConstr, bunInConstr);

    const count = useMemo(() => ingredientsInConstructor.reduce((acc,item) => item?._id===el._id ? ++acc : acc, 0), [ingredientsInConstructor]);

    return (
            <li ref={dragRef} >
                <Link className={`${styles.ingredient}`}  to={`/ingredients/${el._id}`} state={{ background: location, el: el }}  >
                    <Counter count={count} size="default" extraClass='m-1 ingredient__count' />
                    <img src={el.image} alt={el.name} />
                    <p className={`text text_type_digits-default mt-2 mb-2 ${styles.ingredient__price}`}><span className='mr-2'>{el.price}</span> <CurrencyIcon type="primary" /></p>
                    <h3 className={`text text_type_main-default ${styles.ingredient__name}`}>{el.name}</h3>
                </Link>
            </li>
        
    );
};
/*
Ingredient.propTypes = {
    el: burgerPropTypes.isRequired,
    onIngredientClick: PropTypes.func.isRequired,
};*/

export default Ingredient;