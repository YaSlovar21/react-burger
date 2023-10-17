import { makeOrderRequest } from "../../utils/burger-api";
import { AppDispatch, AppThunkAction } from "../types";
import { TIngredient, TIngredientInConstructor } from "../types/data";

//Получение и обновление номера заказа в модальном окне OrderDetails
export const GET_ORDER_NUMBER_SUCCESS: 'GET_ORDER_NUMBER_SUCCESS' = 'GET_ORDER_NUMBER_SUCCESS';
export const GET_ORDER_NUMBER_ERROR: 'GET_ORDER_NUMBER_ERROR' = 'GET_ORDER_NUMBER_ERROR';
export const GET_ORDER_NUMBER_REQUEST: 'GET_ORDER_NUMBER_REQUEST' = 'GET_ORDER_NUMBER_REQUEST';

export const UPDATE_ORDER_NUMBER: 'UPDATE_ORDER_NUMBER' = 'UPDATE_ORDER_NUMBER';
export const SET_ORDER_MODAL_POS: 'SET_ORDER_MODAL_POS' = 'SET_ORDER_MODAL_POS';

export interface IGetOrderNumberAction {
    readonly type: typeof GET_ORDER_NUMBER_REQUEST
};
  
export interface IGetOrderNumberFailedAction {
    readonly type: typeof GET_ORDER_NUMBER_ERROR
};

export interface IGetOrderNumberRequestAction {
    readonly type: typeof GET_ORDER_NUMBER_REQUEST
};

export interface IGetOrderNumberSuccessAction {
    readonly type: typeof GET_ORDER_NUMBER_SUCCESS;
    readonly orderNumber: number
};

export interface IUpdateOrderNumberSuccessAction {
    readonly type: typeof UPDATE_ORDER_NUMBER;
    readonly orderNumber: number
};

export interface ISetOrderModalPosition {
    readonly type: typeof SET_ORDER_MODAL_POS;
    readonly pos: boolean
}

export const getOrderNumber = (arr: TIngredientInConstructor[]):AppThunkAction => (dispatch: AppDispatch) => { 
    dispatch({
        type: GET_ORDER_NUMBER_REQUEST
    });
    makeOrderRequest(arr)
    .then(order => {
        if(order.success) {
            dispatch({
                type: GET_ORDER_NUMBER_SUCCESS,
                orderNumber: order.order.number
            })
        }
        else{
            Promise.reject(`Не получилось оформить заказ. Ошибка ${order.status}`)
        }
    })
    .catch(e => {
        console.log(e);
        dispatch({
            type: GET_ORDER_NUMBER_ERROR
        })
    });
}

export type TOrderActions = IGetOrderNumberAction
    | IGetOrderNumberFailedAction
    | IGetOrderNumberSuccessAction
    | IUpdateOrderNumberSuccessAction
    | ISetOrderModalPosition
    | IGetOrderNumberRequestAction;
