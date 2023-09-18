import React from 'react';

import {
    Logo,
    BurgerIcon,
    ListIcon,
    ProfileIcon,
    
  } from '@ya.praktikum/react-developer-burger-ui-components';
  

import styles from './AppHeader.module.css';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../utils/constants';



function AppHeader() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navlist}>
          <NavLink to={ROUTES.main} className={({isActive}) => `pl-5 pr-5 pb-4 pt-4 text text_type_main-default ${styles.navlist__item} ${isActive && styles.navlist__item_active}`}>
            <BurgerIcon type="secondary" />
            <span className='ml-2'>Конструктор</span>
          </NavLink>
          <NavLink to='/test' className={({isActive}) => `pl-5 pr-5 pb-4 pt-4 text text_type_main-default ${styles.navlist__item} ${isActive && styles.navlist__item_active}`}>
            <ListIcon type="secondary" />
            <span className='ml-2'>Лента заказов</span>
          </NavLink>
        </ul>
        <Logo />
        <NavLink to={ROUTES.profile} className={({isActive}) => `text text_type_main-default pl-5 pr-5 pb-4 pt-4 ${isActive && styles.navlist__item_active} ${styles.navlist__item}`}>
          <ProfileIcon type="secondary" />
          <span className={`ml-2`}>Личный кабинет</span>
        </NavLink>
      </nav>
    </header>
  )
}

export default AppHeader;