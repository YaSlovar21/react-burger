import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_GET_MESSAGE,
} from "../actions/wsActions";

const initialState = {
  wsConnected: false,
  wsConnecting: false,
  orders: null,
  error: "",
};

export const wsOrdersAllReducer = (state = initialState, action) => {
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
        error: action.error,
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
