import { TIngredientInConstructor } from "../types/data";

//Получение списка ингредиентов для конструктора бургера. Используется в компоненте BurgerConstructor
export const GET_CURRENT_INGRS_IN_CONSTR: 'GET_CURRENT_INGRS_IN_CONSTR' = 'GET_CURRENT_INGRS_IN_CONSTR';
export const ADD_ITEM_TO_CONSTRUCTOR: 'ADD_ITEM_TO_CONSTRUCTOR' = 'ADD_ITEM_TO_CONSTRUCTOR';
export const DELETE_ITEM_FROM_CONSTRUCTOR: 'DELETE_ITEM_FROM_CONSTRUCTOR' = 'DELETE_ITEM_FROM_CONSTRUCTOR';
export const MOVE_INGREDIENTS: 'MOVE_INGREDIENTS' = 'MOVE_INGREDIENTS';


export interface IConsrtuctorGetCurrents {
    readonly type: typeof GET_CURRENT_INGRS_IN_CONSTR;
}

export interface IConsrtuctorAddItem {
    readonly type: typeof ADD_ITEM_TO_CONSTRUCTOR;
    item1: TIngredientInConstructor
}

export interface IConsrtuctorDeleteItem {
    readonly type: typeof DELETE_ITEM_FROM_CONSTRUCTOR;
    idtd: string
}

export interface IConsrtuctorMoveItems {
    readonly type: typeof MOVE_INGREDIENTS;
    hoverIndex: number;
    dragIndex: number;
}

export type TConstructorActions = IConsrtuctorGetCurrents
    | IConsrtuctorAddItem
    | IConsrtuctorDeleteItem
    | IConsrtuctorMoveItems;