import { TIngredient } from "../types/data";

//Добавление удаление данных о просматриваемом в модальном окне IngredientDetails ингредиенте.
export const SOME_INGR_VIEWING: 'SOME_INGR_SELECTED' = 'SOME_INGR_SELECTED';
export const SOME_INGR_VIEWING_CLEAR: 'SOME_INGR_SELECTED_CLEAR' = 'SOME_INGR_SELECTED_CLEAR';


export interface IModalIngredientClear {
    readonly type: typeof SOME_INGR_VIEWING_CLEAR
};

export interface IModalIngredientViewing {
    readonly type: typeof SOME_INGR_VIEWING
    ingredient: TIngredient
}

export type TModalIngredientActions = IModalIngredientClear
    | IModalIngredientViewing;