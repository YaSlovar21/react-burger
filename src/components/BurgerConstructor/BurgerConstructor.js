import React from 'react';
import PropTypes from 'prop-types';
import { useMemo } from 'react';

import {
  ConstructorElement,
  DragIcon,
  CurrencyIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';


import { burgerPropTypes } from '../../utils/prop-types';
import styles from './BurgerConstructor.module.css';

function BurgerConstructor({data}) {

    const { bun, ingredients } = useMemo(() => {
        return {
          bun: data.find(item => item.type === 'bun'),
          ingredients: data.filter(item => item.type !== 'bun'),
        };
      }, [data]);

    return (
        <div className={`mt-25 pl-3 ${styles.constructor}`}>
            <ConstructorElement
                type="top"
                isLocked={true}
                text={bun.name}
                price={bun.price}
                thumbnail={bun.image}
                extraClass="ml-8"
            />
            <ul className={styles.zakaz}>
                {
                    ingredients.map(({_id, name, price, image}) => (
                        <li key={_id}>
                            <DragIcon type="primary" />
                            <ConstructorElement
                                text={name}
                                price={price}
                                thumbnail={image}
                                extraClass="ml-2 mr-2"
                            />
                        </li>
                    )) 
                }
            </ul>
            <ConstructorElement
                type="bottom"
                isLocked={true}
                text={bun.name}
                price={bun.price}
                thumbnail={bun.image}
                extraClass="ml-8"
            />
 
            <div className={`pt-10 ${styles.total}`}>
                <div className={`mr-10 ${styles.price}`}>
                    <span className='text text_type_digits-medium mr-2'>610</span>
                    <CurrencyIcon />
                </div>
                <Button htmlType="submit" type="primary" size="large">
                    Оформить заказ
                </Button>
            </div>
        </div>
    )
}


BurgerConstructor.propTypes = {
    data: PropTypes.arrayOf(burgerPropTypes.isRequired).isRequired
};

export default BurgerConstructor;