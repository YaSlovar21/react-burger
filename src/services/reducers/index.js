
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
  MOVE_INGREDIENTS,
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
        case ADD_ITEM_TO_CONSTRUCTOR: {
            return {
                ...state,
                selectedIngregients: {
                    ...state.selectedIngregients, 
                    ingrs: [...state.selectedIngregients.ingrs].concat(action.item1)
                },
                
            };
        }
       case DELETE_ITEM_FROM_CONSTRUCTOR: {
            return {
                ...state,
                selectedIngregients: {
                    ...state.selectedIngregients,
                    ingrs: [...state.selectedIngregients.ingrs.filter(item => item.idtd !== action.idtd)]
                }
            }
        }
        case MOVE_INGREDIENTS: {
            
            //items.splice(action.dragIndex, 1);
            //items.splice(action.hoverIndex, 0, [...state.selectedIngregients.ingrs][action.dragIndex]);
            return {
                ...state,
                selectedIngregients: {
                    ...state.selectedIngregients,
                    ingrs: state.selectedIngregients.ingrs.map(i=>i)
                }
            }
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
                order: action.orderNumber
            };
        }
        case UPDATE_ORDER_NUMBER: {
            return {
                ...state,
                order: null
            };
        }
        default: {
            return state;
        }
    }
}