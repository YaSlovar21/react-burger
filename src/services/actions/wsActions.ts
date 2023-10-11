
import { TOrder } from "../types/data";

export const WS_CONNECTION_START: 'WS_CONNECTION_START' = 'WS_CONNECTION_START';
export const WS_CONNECTION_CLOSED: 'WS_CONNECTION_CLOSED' = 'WS_CONNECTION_CLOSED';
export const WS_CONNECTION_ERROR: 'WS_CONNECTION_ERROR' = 'WS_CONNECTION_ERROR';
export const WS_CONNECTION_SUCCESS: 'WS_CONNECTION_SUCCESS' = 'WS_CONNECTION_SUCCESS';
export const WS_GET_MESSAGE: 'WS_GET_MESSAGE' = 'WS_GET_MESSAGE';

    
/*export const wsOrdersTypeActions: IMiddleTypeActions = {
    wsConnect: WS_CONNECTION_START,
    wsSuccess: WS_CONNECTION_SUCCESS,
    wsClose: WS_CONNECTION_CLOSED,
    onMessage: WS_GET_MESSAGE,
    wsError: WS_CONNECTION_ERROR
};*/


export interface IWSConnentionStart{
    readonly type: typeof WS_CONNECTION_START;
}

export interface IWSConnentionClosed{
    readonly type: typeof WS_CONNECTION_CLOSED;
}

export interface IWSConnentionSuccess{
    readonly type: typeof WS_CONNECTION_SUCCESS;
}

export interface IWSConnentionError{
    readonly type: typeof WS_CONNECTION_ERROR;
    payload: any
}

export interface IWSConnentionGetMessage{
    readonly type: typeof WS_GET_MESSAGE;
    payload: {
        success: boolean,
        orders: TOrder[], //сервер строку "Invalid Token вписывает в это поле"
        totalToday: number,
        total: number
    };
}

export type TWSActions = IWSConnentionStart | IWSConnentionClosed | IWSConnentionSuccess | IWSConnentionError| IWSConnentionGetMessage;



