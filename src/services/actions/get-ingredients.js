import { getInitialIngredients } from "../../utils/burger-api";

//Получение списка ингредиентов от API. Используется в компоненте BurgerIngredients
export const GET_INGREDIENTS_LIST_SUCCESS = 'GET_INGREDIENTS_LIST_SUCCESS';
export const GET_INGREDIENTS_LIST_ERROR = 'GET_INGREDIENTS_LIST_SUCCESS';
export const GET_INGREDIENTS_LIST_REQUEST = 'GET_INGREDIENTS_LIST_REQUEST';


export function getIngregients() {
    return function(dispatch) {
        dispatch({
            type: GET_INGREDIENTS_LIST_REQUEST
        });
        getInitialIngredients()
            .then(res => {
                if (res.success) {
                dispatch({
                    type: GET_INGREDIENTS_LIST_SUCCESS,
                    ingredients: res.data
                })
                } else {
                    Promise.reject(`Не получилось оформить заказ. Ошибка ${res.status}`)
                }
            })
            .catch(e => {
                console.log(e);
                dispatch({
                    type: GET_INGREDIENTS_LIST_ERROR,
                })
            });
    }
}

