import { IMiddleTypeActions } from "../middlewares/socketMiddleware";
import { TOrder } from "../types/data";

export const WS_AUTH_CONNECTION_START :'WS_AUTH_CONNECTION_START' = 'WS_AUTH_CONNECTION_START';
export const WS_AUTH_CONNECTION_CLOSED:'WS_AUTH_CONNECTION_CLOSED' = 'WS_AUTH_CONNECTION_CLOSED';
export const WS_AUTH_CONNECTION_ERROR:'WS_AUTH_CONNECTION_ERROR' = 'WS_AUTH_CONNECTION_ERROR';
export const WS_AUTH_CONNECTION_SUCCESS:'WS_AUTH_CONNECTION_SUCCESS' = 'WS_AUTH_CONNECTION_SUCCESS';

export const WS_AUTH_GET_MESSAGE:'WS_AUTH_GET_MESSAGE' = 'WS_AUTH_GET_MESSAGE';


export interface IWSAuthConnentionStart{
    readonly type: typeof WS_AUTH_CONNECTION_START;
    url: string;
    isPrivate: boolean;
}

export interface IWSAuthConnentionClosed{
    readonly type: typeof WS_AUTH_CONNECTION_CLOSED;
}

export interface IWSAuthConnentionSuccess{
    readonly type: typeof WS_AUTH_CONNECTION_SUCCESS;
}

export interface IWSAuthConnentionError{
    readonly type: typeof WS_AUTH_CONNECTION_ERROR;
    payload?: any
}

export interface IWSAuthConnentionGetMessage{
    readonly type: typeof WS_AUTH_GET_MESSAGE;
    payload?: {
        success: boolean,
        orders: TOrder[] , //сервер строку "Invalid Token вписывает в это поле"
        totalToday: number,
        total: number
    };
}

export type TWSAuthActions = 
    | IWSAuthConnentionStart
    | IWSAuthConnentionClosed
    | IWSAuthConnentionSuccess
    | IWSAuthConnentionError
    | IWSAuthConnentionGetMessage;
    



