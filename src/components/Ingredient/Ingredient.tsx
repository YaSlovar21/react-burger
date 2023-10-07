import React, { FC, useEffect,ReactElement  } from 'react';

import { useDrag } from "react-dnd";

import {
    CurrencyIcon,
    Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from './Ingredient.module.css';
import {  useSelector } from '../../services/hooks';
import { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TIngredient } from '../../services/types/data';

interface IIngrProps {
    el: TIngredient;
    onIngredientClick: (el: TIngredient) => void;
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

    const ingrs: TIngredient[] = useSelector((store) => store.cart.ingrsInCart);
    const bunInConstr = useSelector((store) => store.cart.bun);

    const ingredientsInConstructor = [...[bunInConstr], ...ingrs, ...[bunInConstr]];

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