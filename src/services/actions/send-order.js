import { makeOrderRequest } from "../../utils/burger-api";

//Получение и обновление номера заказа в модальном окне OrderDetails
export const GET_ORDER_NUMBER_SUCCESS = 'GET_ORDER_NUMBER_SUCCESS';
export const GET_ORDER_NUMBER_ERROR = 'GET_ORDER_NUMBER_ERROR';
export const GET_ORDER_NUMBER_REQUEST = 'GET_ORDER_NUMBER_REQUEST';

export const UPDATE_ORDER_NUMBER = 'UPDATE_ORDER_NUMBER';
export const SET_ORDER_MODAL_POS = 'SET_ORDER_MODAL_POS';

export function getOrderNumber(arr) {
    return function(dispatch) {
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
}