
import {
    GET_ORDER_NUMBER_SUCCESS,
    UPDATE_ORDER_NUMBER,
    SET_ORDER_MODAL_POS,
} from "../actions/send-order";
  
const initialState = {
    number: null,
    isOrderViewing: null,
}
    
export const sendOrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ORDER_MODAL_POS: {
            return {
                ...state,
                isOrderViewing: action.pos
            }
        }
        case GET_ORDER_NUMBER_SUCCESS: {
            return {
                ...state,
                number: action.orderNumber
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