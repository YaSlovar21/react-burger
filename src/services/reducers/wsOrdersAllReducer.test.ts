import {
    WS_AUTH_CONNECTION_CLOSED,
    WS_AUTH_CONNECTION_ERROR,
    WS_AUTH_CONNECTION_START,
    WS_AUTH_CONNECTION_SUCCESS,
    WS_AUTH_GET_MESSAGE,
  } from "../actions/wsAuthActions";

import { testWsOrders } from "../../utils/test-data";
import { wsOrdersAuthReducer, initialState } from "./wsOrdersAuthReducer";

describe('wsAll reducer', () => {

    it('should return the initial state', () => {
        expect(wsOrdersAuthReducer(undefined, {} as any)).toEqual(initialState);
    });

    it('should handle ws connection start', () => {
        expect(
            wsOrdersAuthReducer(
                initialState,
                {
                    type: WS_AUTH_CONNECTION_START,
                    url: '',
                    isPrivate: true
                }
            )
        ).toEqual({
            ...initialState,
            wsConnecting: true,
        })
    });

    it('should handle ws connection success', () => {
        expect(
            wsOrdersAuthReducer(
                initialState,
                {
                    type: WS_AUTH_CONNECTION_SUCCESS,
                }
            )
        ).toEqual({
            ...initialState,
            wsConnecting: false,
            wsConnected: true,
        })
    });

    it('should handle ws connection close', () => {
        expect(
            wsOrdersAuthReducer(
                initialState,
                {
                    type: WS_AUTH_CONNECTION_CLOSED,
                }
            )
        ).toEqual({
            ...initialState,
            wsConnected: false,
            wsConnecting: false,
        })
    });

    it('should handle ws connection error', () => {
        expect(
            wsOrdersAuthReducer(
                initialState,
                {
                    type: WS_AUTH_CONNECTION_ERROR,
                    payload: 'Error: connection failed'
                }
            )
        ).toEqual({
            ...initialState,
            error: 'Error: connection failed',
        })
    });

    it('should handle new ws message', () => {
        expect(
            wsOrdersAuthReducer(
                initialState,
                {
                    type: WS_AUTH_GET_MESSAGE,
                    payload: testWsOrders,
                }
            )
        ).toEqual({
            ...initialState,
            orders: testWsOrders,
        })
    });
});
