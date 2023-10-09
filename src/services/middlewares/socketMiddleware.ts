import {Middleware, MiddlewareAPI} from 'redux';
import {AppDispatch, RootState, TApplicationActions} from '../types';
import { getCookie } from "../../utils/utils";
import { WS_CONNECTION_ERROR, WS_CONNECTION_START, WS_CONNECTION_SUCCESS, WS_GET_MESSAGE } from '../actions/wsActions';
import { WS_AUTH_CONNECTION_CLOSED, WS_AUTH_CONNECTION_ERROR, WS_AUTH_CONNECTION_START, WS_AUTH_CONNECTION_SUCCESS, WS_AUTH_GET_MESSAGE } from '../actions/wsAuthActions';
import { TWsActionsTypes } from '../types/data';


//передаем wsTypeActions какие экшены будут проходить через мидлвар...не совсем понятно, но в целом понятно
//подключаем мидлвар в compose..
export const socketMiddleware = ({isPrivate} : {isPrivate: boolean}, wsTypeActions: TWsActionsTypes):Middleware => {

    return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
        let socket: WebSocket | null = null;
        return next => (action) => {

            const { dispatch, getState } = store;
            //достаем из экшена все необходимое
            const { type } = action;
            
            if (type === wsTypeActions.wsInit) {
                socket = new WebSocket(`${action.url}${action.isPrivate ? `?token=${getCookie('accessToken')}` : ''}`);
                console.log(socket);
            }
           
            if (socket) {
                // функция, которая вызывается при открытии сокета
                socket.onopen = event => {
                    console.log('сокет открыт')
                    dispatch({ type: wsTypeActions.onOpen, payload: event });
                };
    
                // функция, которая вызывается при ошибке соединения
                socket.onerror = event => {
                    dispatch({ type: wsTypeActions.onError, payload: event });
                };
    
                // функция, которая вызывается при получения события от сервера
                socket.onmessage = event => {
                    const { data } = event;
                    const parsedData = JSON.parse(data);
                    dispatch({ type: wsTypeActions.onMessage, payload: parsedData });
                };

                // функция, которая вызывается при закрытии соединения
                socket.onclose = event => {
                    dispatch({ type: isPrivate ? WS_AUTH_CONNECTION_CLOSED : WS_AUTH_CONNECTION_CLOSED, payload: event });
                    
                };
    
            }
           
            next(action);
        }
    })
}