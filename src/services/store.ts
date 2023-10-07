import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';
import { socketMiddleware } from './middlewares/socketMiddleware';
import { compose } from "redux";
//import { wsAuthOrdersTypeActions } from './actions/wsAuthActions';
//import { wsOrdersTypeActions } from './actions/wsActions';


declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
} 

export const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk), 
    //applyMiddleware(socketMiddleware(wsAuthOrdersTypeActions)),
    applyMiddleware(socketMiddleware({isPrivate: true})),
    applyMiddleware(socketMiddleware({isPrivate: false}))
    //applyMiddleware(socketMiddleware('wss://norma.nomoreparties.space/orders/all')),
    //applyMiddleware(socketMiddleware('wss://norma.nomoreparties.space/orders', true))
);

export const store = createStore(rootReducer, enhancer);
export type RootState = ReturnType<typeof store.getState>;