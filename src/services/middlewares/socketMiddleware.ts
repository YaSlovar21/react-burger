import {Middleware, MiddlewareAPI} from 'redux';
import {AppDispatch, RootState, TApplicationActions} from '../types';
import { getCookie } from "../../utils/utils";
import { WS_CONNECTION_ERROR, WS_CONNECTION_START, WS_CONNECTION_SUCCESS, WS_GET_MESSAGE } from '../actions/wsActions';
import { WS_AUTH_CONNECTION_CLOSED, WS_AUTH_CONNECTION_ERROR, WS_AUTH_CONNECTION_START, WS_AUTH_CONNECTION_SUCCESS, WS_AUTH_GET_MESSAGE } from '../actions/wsAuthActions';

export interface IMiddleTypeActions {
    wsConnect: string,
    wsSuccess: string,
    wsClose: string,
    onMessage: string,
    wsError: string
  }

//передаем wsTypeActions какие экшены будут проходить через мидлвар...не совсем понятно, но в целом понятно
//подключаем мидлвар в compose..
export const socketMiddleware = ({isPrivate} : {isPrivate: boolean}/*wsTypeActions: IMiddleTypeActions*/):Middleware => {

    return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
        let socket: WebSocket | null = null;
        return next => (action) => {

            const { dispatch, getState } = store;
            //достаем из экшена все необходимое
            const { type } = action;
            
            if (type === WS_CONNECTION_START || type === WS_AUTH_CONNECTION_START) {
                socket = new WebSocket(`${action.url}${action.isPrivate ? `?token=${getCookie('accessToken')}` : ''}`);
                console.log(socket);
            }
           
            if (socket) {
                // функция, которая вызывается при открытии сокета
                socket.onopen = event => {
                    console.log('сокет открыт')
                    dispatch({ type: isPrivate ? WS_AUTH_CONNECTION_SUCCESS : WS_CONNECTION_SUCCESS, payload: event });
                };
    
                // функция, которая вызывается при ошибке соединения
                socket.onerror = event => {
                    dispatch({ type: isPrivate ? WS_AUTH_CONNECTION_ERROR : WS_CONNECTION_ERROR, payload: event });
                };
    
                // функция, которая вызывается при получения события от сервера
                socket.onmessage = event => {
                    const { data } = event;
                    const parsedData = JSON.parse(data);
                    dispatch({ type: isPrivate ? WS_AUTH_GET_MESSAGE : WS_GET_MESSAGE, payload: parsedData });
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