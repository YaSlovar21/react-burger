import React from 'react';
import logo from '../../logo.svg';
import appStyles from './App.module.css';

import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <BurgerIngredients />
      <BurgerConstructor />
    </div>
  );
}

export default App;
