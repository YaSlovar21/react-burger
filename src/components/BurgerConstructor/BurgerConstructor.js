import React from 'react';
import PropTypes from 'prop-types';

import {
  ConstructorElement,
  DragIcon,
  CurrencyIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';



import styles from './BurgerConstructor.module.css';

function BurgerConstructor({data}) {
    return (
        <form className={`mt-25 pl-3 ${styles.constructor}`}>
            <ConstructorElement
                type="top"
                isLocked={true}
                text="Краторная булка N-200i (верх)"
                price={200}
                thumbnail={data[0].image}
                extraClass="ml-8"
            />
            <ul className={styles.zakaz} style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: 0, listStyleType: 'none' }}>
                <li>
                    <DragIcon type="primary" />
                    <ConstructorElement
                        text={data[1].name}
                        price={data[1].price}
                        thumbnail={data[1].image}
                        extraClass="ml-2 mr-2"
                    />
                </li>
                <li>
                    <DragIcon type="primary" />
                    <ConstructorElement
                        text={data[2].name}
                        price={data[2].price}
                        thumbnail={data[2].image}
                        extraClass="ml-2 mr-2"
                    />
                </li>
                <li>
                    <DragIcon type="primary" />
                    <ConstructorElement
                        text={data[3].name}
                        price={data[3].price}
                        thumbnail={data[3].image}
                        extraClass="ml-2 mr-2"
                    />
                </li>
                <li>
                    <DragIcon type="primary" />
                    <ConstructorElement
                        text={data[4].name}
                        price={data[4].price}
                        thumbnail={data[4].image}
                        extraClass="ml-2 mr-2"
                    />
                </li>
                <li>
                    <DragIcon type="primary" extraClass="mr-2" />
                    <ConstructorElement
                        text="Краторная булка N-200i (верх)"
                        price={50}
                        thumbnail={data[0].image}
                        extraClass="ml-2 mr-2"
                    />
                </li>
            </ul>
            <ConstructorElement
                type="bottom"
                isLocked={true}
                text="Краторная булка N-200i (низ)"
                price={200}
                thumbnail={data[0].image}
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
        </form>
    )
}


const burgerPropTypes = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
});

BurgerConstructor.propTypes = {
    data: PropTypes.arrayOf(burgerPropTypes).isRequired
};

export default BurgerConstructor;