import { TOrder } from "../types/data";
import {
  TWSAuthActions,
  WS_AUTH_CONNECTION_CLOSED,
  WS_AUTH_CONNECTION_ERROR,
  WS_AUTH_CONNECTION_START,
  WS_AUTH_CONNECTION_SUCCESS,
  WS_AUTH_GET_MESSAGE,
} from "../actions/wsAuthActions";

type TWSAuthState = {
  wsConnected: boolean;
  wsConnecting: boolean;
  orders?: {
    success: boolean,
    orders: TOrder[] , //сервер строку "Invalid Token вписывает в это поле"
    totalToday: number,
    total: number
  };
  error: string | undefined
}

export const initialState: TWSAuthState = {
  wsConnected: false,
  wsConnecting: false,
  orders: undefined,
  error: "",
};

export const wsOrdersAuthReducer = (state = initialState, action: TWSAuthActions):TWSAuthState => {
  switch (action.type) {
    case WS_AUTH_CONNECTION_START: {
      return {
        ...state,
        wsConnecting: true,
      };
    }
    case WS_AUTH_CONNECTION_SUCCESS: {
      return {
        ...state,
        wsConnecting: false,
        wsConnected: true,
      };
    }
    case WS_AUTH_CONNECTION_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case WS_AUTH_CONNECTION_CLOSED: {
      return {
        ...state,
        wsConnected: false,
        wsConnecting: false,
      };
    }
    case WS_AUTH_GET_MESSAGE: {
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
