import React from 'react';
import styles from './App.module.css';

import AppHeader from '../AppHeader/AppHeader';


import { Routes, Route } from 'react-router-dom';

import Login from '../../pages/Login';
import HomePage from '../../pages/HomePage';
import Register from '../../pages/Register';
import ForgotPassword from '../../pages/ForgotPassword';
import ResetPassword from '../../pages/ResetPassword';
import Profile from '../../pages/Profile';
import IngredientPage from '../../pages/IngredientPage';


function App() {
  return (
    <div className={styles.App}>
        <AppHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/ingredients/:id" element={<IngredientPage />} />
        </Routes>
     
    </div>
  );
}

export default App;
