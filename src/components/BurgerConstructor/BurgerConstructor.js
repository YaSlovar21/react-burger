import React from 'react';
import { useEffect, useState } from 'react';


import {
  ConstructorElement,
  DragIcon,
  CurrencyIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';

import data from '../../utils/data';

import styles from './BurgerConstructor.module.css';

function BurgerConstructor() {
    return (
        <form>
             <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text="Краторная булка N-200i (верх)"
                    price={200}
                    thumbnail={data[0].image}
                />
                <ConstructorElement
                    text="Краторная булка N-200i (верх)"
                    price={50}
                    thumbnail={data[0].image}
                />
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text="Краторная булка N-200i (низ)"
                    price={200}
                    thumbnail={data[0].image}
                />
            </div>
            <div className={styles.info}>
            <div className={styles.price}>
                <span>1223</span>
                <CurrencyIcon />
            </div>
            <Button htmlType="submit" type="primary" size="large">
                Оформить заказ
            </Button>
            </div>
        </form>
    )
}

export default BurgerConstructor;