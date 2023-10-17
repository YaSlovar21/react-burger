import { GET_ORDER_NUMBER_SUCCESS, SET_ORDER_MODAL_POS, UPDATE_ORDER_NUMBER } from "../actions/send-order";
import { sendOrderReducer, initialState } from "./send-order";

describe('send-order reducer', () => {
    
    it('should return the initial state', () => {
        expect(sendOrderReducer(undefined, {} as any)).toEqual(initialState);
    });

    it('should get number of order success', () => {
        expect(
            sendOrderReducer(
                initialState, 
                {
                    type: GET_ORDER_NUMBER_SUCCESS,
                    orderNumber: 4683,
                }
            )).toEqual({
                ...initialState,
                number: 4683,
            })
    });

    it('should update number of order', () => {
        expect(
            sendOrderReducer(
                initialState,
                {
                    type: UPDATE_ORDER_NUMBER,
                    orderNumber: 4684,
                }
            )
        ).toEqual({
            ...initialState,
            number: 4684,
        })
    });

    it('should set modal with order position', () => {
        expect(
            sendOrderReducer(
                initialState,
                {
                    type: SET_ORDER_MODAL_POS,
                    pos: true,
                }
            )
        ).toEqual({
            ...initialState,
            isOrderViewing: true,
        })
    });
    
})