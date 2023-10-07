import { TOrder } from "../types/data";
import {
  TWSActions,
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_GET_MESSAGE,
} from "../actions/wsActions";

type TWSState = {
  wsConnected: boolean;
  wsConnecting: boolean;
  orders?: {
    success: boolean,
    orders: TOrder[], //сервер строку "Invalid Token вписывает в это поле"
    totalToday: number,
    total: number
  };
  error?: string | undefined
}

const initialState:TWSState = {
  wsConnected: false,
  wsConnecting: false,
  orders: undefined,
  error: "",
};

export const wsOrdersAllReducer = (state = initialState, action: TWSActions):TWSState => {
  switch (action.type) {
    case WS_CONNECTION_START: {
      return {
        ...state,
        wsConnecting: true,
      };
    }
    case WS_CONNECTION_SUCCESS: {
      return {
        ...state,
        wsConnecting: false,
        wsConnected: true,
      };
    }
    case WS_CONNECTION_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case WS_CONNECTION_CLOSED: {
      return {
        ...state,
        wsConnected: false,
        wsConnecting: false,
      };
    }
    case WS_GET_MESSAGE: {
      return {
        ...state,
        orders: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
