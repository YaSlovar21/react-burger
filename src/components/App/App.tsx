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
import { useDispatch, useSelector } from '../../services/hooks';
import { ROUTES } from '../../utils/constants';
import ProtectedRouteWithAuth from '../HOC/ProtectedRouteWithAuth';
import Modal from '../Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import { SOME_INGR_VIEWING_CLEAR } from '../../services/actions/modal-ingredient';
import PageNotFound404 from '../../pages/PageNotFound404';
import ProtectedRouteFromAuth from '../HOC/ProtectedRouteFromAuth';
import OrderFeedPage from '../../pages/OrderFeedPage';
import ProfileOrders from '../../pages/ProfileOrders';
import OrderItemCard from '../OrderItemCard/OrderItemCard';
import OrderDetails from '../OrderDetails/OrderDetails';
import OrderItemDetails from '../OrderItemDetails/OrderItemDetails';
import OrderItemPage from '../../pages/OrderItemPage';
import { getIngregients } from '../../services/actions/get-ingredients';


function App() {
  const location = useLocation();
  const background = location.state && location.state.background;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(background);
  //console.log(location);*/

  React.useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  React.useEffect(()=> {
    dispatch(getIngregients());
  }, [dispatch]);
  
  //const ingredientViewing = useSelector(store => store.modalIngredient.viewingIngredient);
  const ingredientViewing = location.state && location.state.el;
  console.log(ingredientViewing)
  function handleModalClose() {
      //dispatch({type: SOME_INGR_VIEWING_CLEAR});
      navigate(background.pathname, {replace: false});
  }

  return (
    <div className={styles.App}>
        <AppHeader />
        <Routes location={background || location}>
          <Route path={ROUTES.main} element={<HomePage />} />
          {/* не пускаем залогиненных пользователей */}
          <Route path={ROUTES.login} element={<ProtectedRouteFromAuth element={<Login />} />} />
          <Route path={ROUTES.register} element={<ProtectedRouteFromAuth element={<Register />} />} />
          <Route path={ROUTES.forgotPassword} element={<ProtectedRouteFromAuth element={<ForgotPassword />} /> } />
          <Route path={ROUTES.resetPassword} element={<ProtectedRouteFromAuth element={<ResetPassword />} />} />
          <Route path={ROUTES.feed} element={<OrderFeedPage />} />
          {/* пускаем только залогиненных */}
          <Route path={ROUTES.profile} element={<ProtectedRouteWithAuth element={<Profile />} />} />
          <Route path={ROUTES.profileOrders} element={<ProtectedRouteWithAuth element={<ProfileOrders />} />} />
          {/* ингредиента или заказа */}
          <Route path={ROUTES.ingredient} element={<IngredientPage />} />
          <Route path={ROUTES.profileOrderItem} element={<ProtectedRouteWithAuth element={<OrderItemPage />} />} />
          <Route path={ROUTES.feedOrderItem} element={<OrderItemPage />} />

          <Route path='*' element={<PageNotFound404 />} />
        </Routes>
     
        {background && ( <Routes>
          <Route path={ROUTES.ingredient} element={
            <Modal onEventCloseInModal={handleModalClose}>
                <IngredientDetails el={ingredientViewing}/> 
            </Modal>} />
          <Route path={ROUTES.profileOrderItem} element={<ProtectedRouteWithAuth  element={
            <Modal onEventCloseInModal={handleModalClose}>
              <OrderItemDetails el={ingredientViewing} />
            </Modal>} /> }
           />
          <Route path={ROUTES.feedOrderItem} element={
            <Modal onEventCloseInModal={handleModalClose}>
              <OrderItemDetails el={ingredientViewing} />
            </Modal>
          } />
        </Routes>)}
    </div>
  );
}

export default App;
