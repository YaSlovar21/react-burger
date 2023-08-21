import React from 'react';
import styles from './App.module.css';

import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";



function App() {
  return (
    <div className={styles.App}>
      <AppHeader />
      <main className={styles.content}>
        <DndProvider backend={HTML5Backend}>
          <div className={styles.page}>
            <BurgerIngredients />
            <BurgerConstructor />
          </div>
        </DndProvider>
      </main>
    </div>
  );
}

export default App;
