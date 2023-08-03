import React from 'react';

import {
    Logo,
    BurgerIcon,
    ListIcon,
    ProfileIcon,
    
  } from '@ya.praktikum/react-developer-burger-ui-components';
  

import styles from './AppHeader.module.css';

function AppHeader() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navlist}>
          <a className={`pl-5 pr-5 pb-4 pt-4 text text_type_main-default ${styles.navlist__item}`} href="/#">
            <BurgerIcon type="primary" />
            <span className='ml-2 text'>Конструктор</span>
          </a>
          <a className={`pl-5 pr-5 pb-4 pt-4 text text_type_main-default text_color_inactive ${styles.navlist__item}`} href="/#">
            <ListIcon type="secondary" />
            <span className='ml-2 text text_type_main-default text_color_inactive'>Лента заказов</span>
          </a>
        </ul>
        <Logo />
        <a className={`pl-5 pr-5 pb-4 pt-4 ${styles.navlist__item}`} href="/#">
          <ProfileIcon type="secondary" />
          <span className='ml-2 text text_type_main-default text_color_inactive'>Личный кабинет</span>
        </a>
      </nav>
    </header>
  )
}

export default AppHeader;