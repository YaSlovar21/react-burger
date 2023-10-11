import { getInitialIngredients } from "../../utils/burger-api";
import { AppDispatch, AppThunkAction } from "../types";
import { TIngredient } from "../types/data";

//Получение списка ингредиентов от API. Используется в компоненте BurgerIngredients
export const GET_INGREDIENTS_LIST_SUCCESS: 'GET_INGREDIENTS_LIST_SUCCESS' = 'GET_INGREDIENTS_LIST_SUCCESS';
export const GET_INGREDIENTS_LIST_ERROR: 'GET_INGREDIENTS_LIST_ERROR' = 'GET_INGREDIENTS_LIST_ERROR';
export const GET_INGREDIENTS_LIST_REQUEST: 'GET_INGREDIENTS_LIST_REQUEST' = 'GET_INGREDIENTS_LIST_REQUEST';

export interface IGetIngredientsAction {
    readonly type: typeof GET_INGREDIENTS_LIST_REQUEST
};
  
export interface IGetIngredientsFailedAction {
    readonly type: typeof GET_INGREDIENTS_LIST_ERROR
};

export interface IGetIngredientsSuccessAction {
    readonly type: typeof GET_INGREDIENTS_LIST_SUCCESS;
    readonly ingredients: TIngredient[]
};


export const getIngregients = ():AppThunkAction => (dispatch: AppDispatch) => { 
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


export type TGetIngredientsActions = IGetIngredientsAction 
    | IGetIngredientsFailedAction
    | IGetIngredientsSuccessAction;