import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';

import {
  Tab,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { useMemo } from 'react';

import styles from './BurgerIngredients.module.css';
import Ingredient from '../Ingredient/Ingredient';

import { burgerPropTypes } from '../../utils/prop-types';
import Modal from '../Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import { useDispatch, useSelector } from 'react-redux';
import { SOME_INGR_VIEWING, SOME_INGR_VIEWING_CLEAR } from '../../services/actions';

import { getInitialIngredients } from '../../utils/burger-api';
import { getIngregients } from '../../services/actions';

function BurgerIngredients({data}) {
    const ingredients = useSelector(store => store.ingredients);
    const dispatch = useDispatch();
    
    React.useEffect(()=> {
      dispatch(getIngregients());
    }, [dispatch]);
    

    const [current, setCurrent] = React.useState('bun');

    const buns = useMemo(()=> ingredients.filter((item) => item.type === 'bun'), [ingredients]);
    const mains = useMemo(()=>ingredients.filter((item) => item.type === 'main'), [ingredients]);
    const sauces = useMemo(()=>ingredients.filter((item) => item.type === 'sauce'), [ingredients]);
    const containerRef = useRef(null);
    const [refBuns, isBunsInView] = useInView({threshold: 0.49, root: containerRef.current});
    const [sauceRef, isSaucesInView] = useInView({threshold: 0.51, root: containerRef.current});
    const [mainsRef, isMainsInView] = useInView({threshold: 0.51, root: containerRef.current});

    useEffect(()=> {
        isBunsInView 
        ? setCurrent('bun')
        : isSaucesInView 
        ? setCurrent('sauce') 
        : setCurrent('main')
    }, [isBunsInView, isMainsInView, isSaucesInView])

    const ingredientViewing = useSelector(store => store.viewingIngredient);
    



    function handleIngredientClick(el) {
        dispatch({
            type: SOME_INGR_VIEWING,
            ingredient: el
        })
    }

    function handleModalClose() {
        dispatch({
            type: SOME_INGR_VIEWING_CLEAR
        })
    }

    return (
        <div ref={containerRef} className={styles.ingredients}>
            <h1 className='text text_type_main-large mt-10'>Соберите бургер</h1>
            <div  className={`mt-5 mb-10 ${styles.tabs}`}>
                <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
                Булки
                </Tab>
                <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
                Соусы
                </Tab>
                <Tab value="main" active={current === 'main'} onClick={setCurrent}>
                Начинки
                </Tab>
            </div>
            <div className={styles.listwrapper}>
                <h2 className='text text_type_main-medium mb-6'>Булки</h2>
                <ul ref={refBuns} className={styles.ingredients__list}>
                    {buns
                    .map((item) => (
                        <Ingredient   el={item} key={item._id} onIngredientClick={handleIngredientClick}/>
                    ))}
                </ul>
                <h2 className='text text_type_main-medium mb-6 mt-10'>Соусы</h2>
                <ul ref={sauceRef} className={styles.ingredients__list}>
                    {sauces
                    .map((item) => (
                        <Ingredient el={item} key={item._id} onIngredientClick={handleIngredientClick} />
                    ))}
                </ul>
                <h2 className='text text_type_main-medium mb-6 mt-10'>Начинки</h2>
                <ul ref={mainsRef} className={styles.ingredients__list}>
                    {mains
                    .map((item) => (
                        <Ingredient   el={item} key={item._id} onIngredientClick={handleIngredientClick} />
                    ))}
                </ul>
            </div>
            {ingredientViewing && (<Modal onEventCloseInModal={handleModalClose}>
                <IngredientDetails el={ingredientViewing}/> 
            </Modal>
            )}
    </div>
    )
}

BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(burgerPropTypes.isRequired).isRequired
};

export default BurgerIngredients;