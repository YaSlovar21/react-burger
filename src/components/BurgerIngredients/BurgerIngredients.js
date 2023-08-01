import React from 'react';
import PropTypes from 'prop-types';

import {
  CurrencyIcon,
  Counter,
  Tab,
} from "@ya.praktikum/react-developer-burger-ui-components";


import styles from './BurgerIngredients.module.css';

const Ingredient = ({ _id, name, image, price }) =>{
    return (
        <li className={`${styles.ingredient}`}>
            <Counter count={1} size="default" extraClass='m-1 ingredient__count' />
            <img src={image} alt={name} />
            <p className='text text_type_digits-default mt-2 mb-2' style={{display: 'flex', alignItems: 'center'}}><span className='mr-2'>{price}</span> <CurrencyIcon type="primary" /></p>
            <h3 className={`text text_type_main-default ${styles.ingredient__name}`}>{name}</h3>
        </li>
    );
}

function BurgerIngredients({data}) {

    const [current, setCurrent] = React.useState('bun');

    return (
        <div className={styles.ingredients}>
            <h1 className='text text_type_main-large mt-10'>Соберите бургер</h1>
            <div className='mt-5 mb-10' style={{ display: 'flex' }}>
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
                    {data
                    .filter(({ type }) => type === 'bun')
                    .map((item) => (
                        <Ingredient {...item} key={item._id} />
                    ))}
                </ul>
                <h2 className='text text_type_main-medium mb-6 mt-10'>Соусы</h2>
                <ul className={styles.ingredients__list}>
                    {data
                    .filter(({ type }) => type === 'sauce')
                    .map((item) => (
                        <Ingredient {...item} key={item._id}/>
                    ))}
                </ul>
                <h2 className='text text_type_main-medium mb-6 mt-10'>Начинки</h2>
                <ul className={styles.ingredients__list}>
                    {data
                    .filter(({ type }) => type === 'main')
                    .map((item) => (
                        <Ingredient {...item} key={item._id}/>
                    ))}
                </ul>
            </div>
    </div>
    )
}

/*
    {
       "_id":"60666c42cc7b410027a1a9b1",
       "name":"Краторная булка N-200i",
       "type":"bun",
       "proteins":80,
       "fat":24,
       "carbohydrates":53,
       "calories":420,
       "price":1255,
       "image":"https://code.s3.yandex.net/react/code/bun-02.png",
       "image_mobile":"https://code.s3.yandex.net/react/code/bun-02-mobile.png",
       "image_large":"https://code.s3.yandex.net/react/code/bun-02-large.png",
       "__v":0
    },
*/

const burgerPropTypes = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
});

BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(burgerPropTypes).isRequired
};

export default BurgerIngredients;