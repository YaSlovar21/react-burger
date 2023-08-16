import { getInitialIngredients, makeOrderRequest } from "../../utils/burger-api";

//Получение списка ингредиентов от API. Используется в компоненте BurgerIngredients
export const GET_INGREDIENTS_LIST_SUCCESS = 'GET_INGREDIENTS_LIST_SUCCESS';
export const GET_INGREDIENTS_LIST_FAILED = 'GET_INGREDIENTS_LIST_SUCCESS';

//Получение списка ингредиентов для конструктора бургера. Используется в компоненте BurgerConstructor
export const GET_CURRENT_INGRS_IN_CONSTR = 'GET_CURRENT_INGRS_IN_CONSTR';
export const ADD_ITEM_TO_CONSTRUCTOR = 'ADD_ITEM_TO_CONSTRUCTOR';
export const DELETE_ITEM_FROM_CONSTRUCTOR = 'DELETE_ITEM_FROM_CONSTRUCTOR'


//Добавление удаление данных о просматриваемом в модальном окне IngredientDetails ингредиенте.
export const SOME_INGR_VIEWING = 'SOME_INGR_SELECTED';
export const SOME_INGR_VIEWING_CLEAR = 'SOME_INGR_SELECTED_CLEAR';

//Получение и обновление номера заказа в модальном окне OrderDetails
export const GET_ORDER_NUMBER = 'GET_ORDER_NUMBER';
export const UPDATE_ORDER_NUMBER = 'UPDATE_ORDER_NUMBER';

export const INCREASE_ITEM = 'INCREASE_ITEM';
export const DECREASE_ITEM = 'DECREASE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

export function getIngregients() {
    return function(dispatch) {
        getInitialIngredients()
            .then(res => {
                dispatch({
                    type: GET_INGREDIENTS_LIST_SUCCESS,
                    ingredients: res.data
                })
            })
            .catch(e => {
                console.log(e);
                dispatch({
                    type: GET_INGREDIENTS_LIST_FAILED,
                })
            });
    }
}

export function getOrderNumber(arr) {
    return function(dispatch) {
        makeOrderRequest(arr)
        .then(order => {
            console.log(order);
            if(order.success) {
                dispatch({
                    type: GET_ORDER_NUMBER,
                    orderNumber: order.order.number
                })
            }
            else{
                Promise.reject(`Не получилось оформить заказ. Ошибка ${order.status}`)
            }
        })
        .catch(e => console.log(e));
    }
}