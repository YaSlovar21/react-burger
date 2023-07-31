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
      <nav>
        <ul className={styles.navlist}>
          <li>
            <BurgerIcon type="primary" />
            <span>Конструктор</span>
          </li>
          <li>
            <ListIcon type="primary" />
            <span>Лента заказов</span>
          </li>
        </ul>
        <Logo />
        <a className={styles.acc} href="#">
          <ProfileIcon type="primary" />
          <span>Личный кабинет</span>
        </a>
      </nav>
    </header>
  )
}

export default AppHeader;