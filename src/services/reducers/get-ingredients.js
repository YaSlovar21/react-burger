import { GET_INGREDIENTS_LIST_SUCCESS } from "../actions/get-ingredients";


const initialState = {
    items: [],
}

export const getIngredientReducer = (state = initialState, action) => {
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