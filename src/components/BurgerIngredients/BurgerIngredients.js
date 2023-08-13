import React from 'react';
import PropTypes from 'prop-types';

import {
  Tab,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { useMemo } from 'react';

import styles from './BurgerIngredients.module.css';
import Ingredient from '../Ingredient/Ingredient';

import { burgerPropTypes } from '../../utils/prop-types';
import Modal from '../Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';

function BurgerIngredients({data}) {

    const [current, setCurrent] = React.useState('bun');

    const buns = useMemo(()=> data.filter((item) => item.type === 'bun'), [data]);
    const mains = useMemo(()=>data.filter((item) => item.type === 'main'), [data]);
    const sauces = useMemo(()=>data.filter((item) => item.type === 'sauce'), [data]);

    function handleIngredientClick(el) {
        setSelectedIngr(el);
        setModalIngrIsOpen(true);
    }

    function handleModalClose() {
        setSelectedIngr({});
        setModalIngrIsOpen(false);
    }

    const [modalIngrIsOpen, setModalIngrIsOpen] = React.useState(false);
    const [selectedIngr, setSelectedIngr] = React.useState(null);

    return (
        <div className={styles.ingredients}>
            <h1 className='text text_type_main-large mt-10'>Соберите бургер</h1>
            <div className={`mt-5 mb-10 ${styles.tabs}`}>
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
                <ul className={styles.ingredients__list}>
                    {buns
                    .map((item) => (
                        <Ingredient el={item} key={item._id} onIngredientClick={handleIngredientClick}/>
                    ))}
                </ul>
                <h2 className='text text_type_main-medium mb-6 mt-10'>Соусы</h2>
                <ul className={styles.ingredients__list}>
                    {sauces
                    .map((item) => (
                        <Ingredient el={item} key={item._id} onIngredientClick={handleIngredientClick} />
                    ))}
                </ul>
                <h2 className='text text_type_main-medium mb-6 mt-10'>Начинки</h2>
                <ul className={styles.ingredients__list}>
                    {mains
                    .map((item) => (
                        <Ingredient el={item} key={item._id} onIngredientClick={handleIngredientClick} />
                    ))}
                </ul>
            </div>
            {modalIngrIsOpen && selectedIngr && (<Modal onEventCloseInModal={handleModalClose}>
                <IngredientDetails el={selectedIngr}/> 
            </Modal>
            )}
    </div>
    )
}

BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(burgerPropTypes.isRequired).isRequired
};

export default BurgerIngredients;