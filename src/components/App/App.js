import React from 'react';
import styles from './App.module.css';

import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import { getInitialIngredients } from '../../utils/burger-api';




function App() {

  const [ingrState, setIngrState] = React.useState([]);

  React.useEffect(()=> {
    getInitialIngredients()
      .then(res => {
        setIngrState(res.data)
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  return (
    <div className={styles.App}>
      <AppHeader />
      <main className={styles.content}>
        <div className={styles.page}>
          <BurgerIngredients data={ingrState} />
          <BurgerConstructor data={ingrState} />
        </div>
      </main>
    </div>
  );
}

export default App;
