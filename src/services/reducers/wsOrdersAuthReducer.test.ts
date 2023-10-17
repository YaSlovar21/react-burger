import { wsOrdersAllReducer, initialState } from "./wsOrdersAllReducer";
import {
    WS_CONNECTION_CLOSED,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_START,
    WS_CONNECTION_SUCCESS,
    WS_GET_MESSAGE,
  } from "../actions/wsActions";
import { testWsOrders } from "../../utils/test-data";

describe('wsAll reducer', () => {

    it('should return the initial state', () => {
        expect(wsOrdersAllReducer(undefined, {} as any)).toEqual(initialState);
    });

    it('should handle ws connection start', () => {
        expect(
            wsOrdersAllReducer(
                initialState,
                {
                    type: WS_CONNECTION_START,
                }
            )
        ).toEqual({
            ...initialState,
            wsConnecting: true,
        })
    });

    it('should handle ws connection success', () => {
        expect(
            wsOrdersAllReducer(
                initialState,
                {
                    type: WS_CONNECTION_SUCCESS,
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
            wsOrdersAllReducer(
                initialState,
                {
                    type: WS_CONNECTION_CLOSED,
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
            wsOrdersAllReducer(
                initialState,
                {
                    type: WS_CONNECTION_ERROR,
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
            wsOrdersAllReducer(
                initialState,
                {
                    type: WS_GET_MESSAGE,
                    payload: testWsOrders,
                }
            )
        ).toEqual({
            ...initialState,
            orders: testWsOrders,
        })
    });
});
