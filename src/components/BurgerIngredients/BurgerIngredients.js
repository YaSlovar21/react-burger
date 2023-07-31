import React from 'react';
import { useState } from 'react';

import {
  CurrencyIcon,
  Counter,
  Tab,
} from "@ya.praktikum/react-developer-burger-ui-components";


import data from '../../utils/data';

import styles from './BurgerIngredients.module.css';

function BurgerIngredients() {

    const [current, setCurrent] = React.useState('bun');

    return (
        <>
            <div style={{ display: 'flex' }}>
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
            <ul className={styles.content}>
                {data
                .filter(({ type }) => type === current)
                .map(({ _id, name, image, price }) => (
                <li key={_id}>
                    <img src={image} alt={name} />
                    <h3>{name}</h3>
                    <p>{price}</p>
                </li>
                
                ))}
            </ul>
    </>
    )
}

export default BurgerIngredients;