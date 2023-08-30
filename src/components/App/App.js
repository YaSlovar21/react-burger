import React from 'react';
import styles from './App.module.css';

import AppHeader from '../AppHeader/AppHeader';


import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import Login from '../../pages/Login';
import HomePage from '../../pages/HomePage';
import Register from '../../pages/Register';
import ForgotPassword from '../../pages/ForgotPassword';
import ResetPassword from '../../pages/ResetPassword';
import Profile from '../../pages/Profile';
import IngredientPage from '../../pages/IngredientPage';
import { getUserData } from '../../services/actions/user';
import { useDispatch, useSelector } from 'react-redux';
import { ROUTES } from '../../utils/constants';
import ProtectedRoute from '../HOC/ProtectedRoute';
import Modal from '../Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import { SOME_INGR_VIEWING_CLEAR } from '../../services/actions/modal-ingredient';
import PageNotFound404 from '../../pages/PageNotFound404';


function App() {
  const location = useLocation();
  const background = location.state && location.state.background;
  const fromForgotPassword = location.state && location.state.from;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(background);
  console.log(location);

  React.useEffect(() => {
    dispatch(getUserData());
  },[dispatch]);


  //const ingredientViewing = useSelector(store => store.modalIngredient.viewingIngredient);
  const ingredientViewing = location.state && location.state.el;
   
  function handleModalClose() {
      //dispatch({type: SOME_INGR_VIEWING_CLEAR});
      navigate(background.pathname, {replace: false});
  }

  return (
    <div className={styles.App}>
        <AppHeader />
        <Routes location={background || location}>
          <Route path={ROUTES.main} element={<HomePage />} />
          {/* пускаем только не залогинненых пользвателей */}
          <Route path={ROUTES.login} element={<Login />}/>
          <Route path={ROUTES.register} element={<Register />} />
          <Route path={ROUTES.forgotPassword}  element={<ForgotPassword />}  />
          {
            fromForgotPassword && 
            <Route path={ROUTES.resetPassword} element={<ResetPassword />}  />
          }
          {/* пускаем только залогиненных */}
          <Route path={ROUTES.profile} element={<ProtectedRoute element={<Profile />} />} />
          {/* Ингредиент */}
          <Route path={ROUTES.ingredient} element={<IngredientPage />} />
          <Route path='*' element={<PageNotFound404 />} />
        </Routes>
     
        {background && ( <Routes>
          <Route path={ROUTES.ingredient} element={
            <Modal onEventCloseInModal={handleModalClose}>
                <IngredientDetails el={ingredientViewing}/> 
            </Modal>} />
          
        </Routes>)}
    </div>
  );
}

export default App;
