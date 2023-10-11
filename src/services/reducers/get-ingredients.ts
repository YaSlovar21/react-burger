import { GET_INGREDIENTS_LIST_SUCCESS, TGetIngredientsActions } from "../actions/get-ingredients";
import { TIngredient } from "../types/data";

type TIngreientsState = {
    items: TIngredient[]
}

const initialState:TIngreientsState = {
    items: [],
}

export const getIngredientReducer = (state = initialState, action: TGetIngredientsActions):TIngreientsState => {
    switch (action.type) {
        case GET_INGREDIENTS_LIST_SUCCESS: {
            return {
                ...state,
                items: action.ingredients
            };
        }
        default: {
            return state;
        }
    }
}