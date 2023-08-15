import {
  GET_INGREDIENTS_LIST_SUCCESS,
  GET_INGREDIENTS_LIST_FAILED,
  GET_CURRENT_INGRS_IN_CONSTR,

  ADD_ITEM_TO_CONSTRUCTOR,
  DELETE_ITEM_FROM_CONSTRUCTOR,

  SOME_INGR_VIEWING,
  SOME_INGR_VIEWING_CLEAR,

  GET_ORDER_NUMBER,
  UPDATE_ORDER_NUMBER,
} from "../actions";

const initialState = {
    ingredients: [],
    selectedIngregients: {
        bun: null,
        ingrs: []
    },
    viewingIngredient: null,
    order: null,
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INGREDIENTS_LIST_SUCCESS: {
            return {
                ...state,
                ingredients: action.ingredients
            };
        }
        case GET_CURRENT_INGRS_IN_CONSTR: {
            return {
                ...state,
            };
        }
        case SOME_INGR_VIEWING: {
            return {
                ...state,
                viewingIngredient: action.ingredient
            };
        }
        case SOME_INGR_VIEWING_CLEAR: {
            return {
                ...state,
                viewingIngredient: null
            };
        }
        case GET_ORDER_NUMBER: {
            return {
                ...state,
            };
        }
        case UPDATE_ORDER_NUMBER: {
            return {
                ...state,
            };
        }
        default: {
            return state;
        }
    }
}