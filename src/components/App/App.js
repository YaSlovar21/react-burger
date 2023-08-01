import React from 'react';
import logo from '../../logo.svg';
import styles from './App.module.css';

import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';

import data from '../../utils/data';

function App() {
  return (
    <div className={styles.App}>
      <AppHeader />
      <main className={styles.content}>
        <div className={styles.page}>
          <BurgerIngredients data={data} />
          <BurgerConstructor data={data} />
        </div>
      </main>
    </div>
  );
}

export default App;
