import {
  WS_AUTH_CONNECTION_CLOSED,
  WS_AUTH_CONNECTION_ERROR,
  WS_AUTH_CONNECTION_START,
  WS_AUTH_CONNECTION_SUCCESS,
  WS_AUTH_GET_MESSAGE,
} from "../actions/wsAuthActions";

const initialState = {
  wsConnected: false,
  wsConnecting: false,
  orders: null,
  error: "",
};

export const wsOrdersAuthReducer = (state = initialState, action) => {
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
        error: action.error,
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
