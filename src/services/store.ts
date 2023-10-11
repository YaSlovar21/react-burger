import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';
import { socketMiddleware } from './middlewares/socketMiddleware';
import { compose } from "redux";
//import { wsAuthOrdersTypeActions } from './actions/wsAuthActions';
//import { wsOrdersTypeActions } from './actions/wsActions';


import { WS_CONNECTION_CLOSED, WS_CONNECTION_ERROR, WS_CONNECTION_START, WS_CONNECTION_SUCCESS, WS_GET_MESSAGE } from './actions/wsActions';
import { WS_AUTH_CONNECTION_CLOSED, WS_AUTH_CONNECTION_ERROR, WS_AUTH_CONNECTION_START, WS_AUTH_CONNECTION_SUCCESS, WS_AUTH_GET_MESSAGE } from './actions/wsAuthActions';
import { TWsActionsTypes } from './types/data';

const wsActions: TWsActionsTypes = {
  wsInit: WS_CONNECTION_START,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onMessage: WS_GET_MESSAGE
};

const wsAuthActions: TWsActionsTypes = {
  wsInit: WS_AUTH_CONNECTION_START,
  onOpen: WS_AUTH_CONNECTION_SUCCESS,
  onClose: WS_AUTH_CONNECTION_CLOSED,
  onError: WS_AUTH_CONNECTION_ERROR,
  onMessage: WS_AUTH_GET_MESSAGE
};

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
} 

export const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk), 
    //applyMiddleware(socketMiddleware(wsAuthOrdersTypeActions)),
    applyMiddleware(socketMiddleware({isPrivate: true}, wsAuthActions)),
    applyMiddleware(socketMiddleware({isPrivate: false}, wsActions))
    //applyMiddleware(socketMiddleware('wss://norma.nomoreparties.space/orders/all')),
    //applyMiddleware(socketMiddleware('wss://norma.nomoreparties.space/orders', true))
);

export const store = createStore(rootReducer, enhancer);
export type RootState = ReturnType<typeof store.getState>;