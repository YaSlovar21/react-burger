
import {
    GET_ORDER_NUMBER_SUCCESS,
    UPDATE_ORDER_NUMBER,
    GET_ORDER_NUMBER_REQUEST,
    SET_ORDER_MODAL_POS,
    TOrderActions,
} from "../actions/send-order";
  
type TSendOrderState = {
    number: number | undefined;
    isOrderViewing: boolean;
    isOrderCooking: boolean;
}

export const initialState: TSendOrderState = {
    number: undefined,
    isOrderViewing: false,
    isOrderCooking: false,
}
    
export const sendOrderReducer = (state = initialState, action: TOrderActions):TSendOrderState => {
    switch (action.type) {
        case SET_ORDER_MODAL_POS: {
            return {
                ...state,
                isOrderViewing: action.pos
            }
        }
        case GET_ORDER_NUMBER_REQUEST: {
            return {
                ...state,
                isOrderCooking: true
            }
        }
        case GET_ORDER_NUMBER_SUCCESS: {
            return {
                ...state,
                number: action.orderNumber,
                isOrderCooking: false
            };
        }
        case UPDATE_ORDER_NUMBER: {
            return {
                ...state,
                number: action.orderNumber
            };
        }
        default: {
            return state;
        }
    }
}