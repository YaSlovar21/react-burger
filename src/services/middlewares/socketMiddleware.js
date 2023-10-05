import { getCookie } from "../../utils/utils";

export const socketMiddleware = (wsUrl, isPrivate) => {
    return((store) => {
        let socket = null;
        return next => (action) => {
            const { dispatch, getState } = store;
            const { type, payload, secure } = action;
            
            if (type === 'WS_AUTH_CONNECTION_START') {
                socket = new WebSocket(`${wsUrl}${isPrivate ? `?token=${getCookie('accessToken')}` : ''}`);
                console.log(`${wsUrl}${isPrivate ? `?token=${getCookie('accessToken')}` : ''}`)
            }
            if (type === 'WS_CONNECTION_START') {
                socket = new WebSocket(`${wsUrl}${isPrivate ? `?token=${getCookie('accessToken')}` : ''}`);
                console.log(`${wsUrl}${isPrivate ? `?token=${getCookie('accessToken')}` : ''}`)
            }
            if (socket && isPrivate) {

                // функция, которая вызывается при открытии сокета
                socket.onopen = event => {
                    dispatch({ type: `WS_AUTH_CONNECTION_SUCCESS`, payload: event });
                };
    
                // функция, которая вызывается при ошибке соединения
                socket.onerror = event => {
                    dispatch({ type: `WS_AUTH_CONNECTION_ERROR`, payload: event });
                };
    
                // функция, которая вызывается при получения события от сервера
                socket.onmessage = event => {
                    const { data } = event;
                    const parsedData = JSON.parse(data);
                    dispatch({ type: `WS_AUTH_GET_MESSAGE`, payload: parsedData });
                    console.log(isPrivate ? data: 're');
                };

                // функция, которая вызывается при закрытии соединения
                socket.onclose = event => {
                    dispatch({ type: `WS_AUTH_CONNECTION_CLOSED`, payload: event });
                    console.log(`WS_AUTH_CONNECTION_CLOSED`)
                };
    
                if (type === `WS_AUTH_SEND_MESSAGE`) {
                    const message = payload;
                    // функция для отправки сообщения на сервер
                    socket.send(JSON.stringify(message));
                }
            }
            if (socket && !isPrivate) {

                // функция, которая вызывается при открытии сокета
                socket.onopen = event => {
                    dispatch({ type: `WS_CONNECTION_SUCCESS`, payload: event });
                };
    
                // функция, которая вызывается при ошибке соединения
                socket.onerror = event => {
                    dispatch({ type: `WS_CONNECTION_ERROR`, payload: event });
                };
    
                // функция, которая вызывается при получения события от сервера
                socket.onmessage = event => {
                    const { data } = event;
                    const parsedData = JSON.parse(data);
                    dispatch({ type: `WS_GET_MESSAGE`, payload: parsedData });
                    console.log(isPrivate ? data: 're');
                };

                // функция, которая вызывается при закрытии соединения
                socket.onclose = event => {
                    dispatch({ type: `WS_CONNECTION_CLOSED`, payload: event });
                    console.log(`WS_AUTH_CONNECTION_CLOSED`)
                };
    
                if (type === `WS_SEND_MESSAGE`) {
                    const message = payload;
                    // функция для отправки сообщения на сервер
                    socket.send(JSON.stringify(message));
                }
            }
            next(action);
        }
    })
}