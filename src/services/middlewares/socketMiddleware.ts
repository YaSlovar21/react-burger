import {Middleware, MiddlewareAPI} from 'redux';
import {AppDispatch, RootState, TApplicationActions} from '../types';
import { getCookie } from "../../utils/utils";
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
                    dispatch({ type: wsTypeActions.onClose, payload: event });
                    
                };
    
            }
           
            next(action);
        }
    })
}