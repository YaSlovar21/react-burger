import React from 'react';
import styles from './App.module.css';

import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';


import { BASE_URL } from '../../utils/constants';

function App() {

  const [ingrState, setIngrState] = React.useState([]);

  React.useEffect(()=> {
    fetch(BASE_URL)
      .then(res => res.json())
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
          {/*<Modal type="2" el={ingrState.length && ingrState[12]}/>*/}
        </div>
      </main>
    </div>
  );
}

export default App;
