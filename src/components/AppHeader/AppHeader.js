import React from 'react';

import {
    Logo,
    BurgerIcon,
    ListIcon,
    ProfileIcon,
    
  } from '@ya.praktikum/react-developer-burger-ui-components';
  

import styles from './AppHeader.module.css';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/constants';

function AppHeader() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navlist}>
          <Link to={ROUTES.main} className={`pl-5 pr-5 pb-4 pt-4 text text_type_main-default ${styles.navlist__item}`}>
            <BurgerIcon type="primary" />
            <span className='ml-2 text'>Конструктор</span>
          </Link>
          <a className={`pl-5 pr-5 pb-4 pt-4 text text_type_main-default text_color_inactive ${styles.navlist__item}`} href="/#">
            <ListIcon type="secondary" />
            <span className='ml-2 text text_type_main-default text_color_inactive'>Лента заказов</span>
          </a>
        </ul>
        <Logo />
        <a className={`pl-5 pr-5 pb-4 pt-4 ${styles.navlist__item}`} href="/#">
          <ProfileIcon type="secondary" />
          <Link to={ROUTES.profile} className={styles.navlink}><span className='ml-2 text text_type_main-default text_color_inactive'>Личный кабинет</span></Link>
        </a>
      </nav>
    </header>
  )
}

export default AppHeader;