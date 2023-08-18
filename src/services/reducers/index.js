
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
  SET_ORDER_MODAL_POS,

  MOVE_INGREDIENTS,
} from "../actions";

const initialState = {
    ingredients: [],
    
    bun: null,
    ingrsInCart: [],

    viewingIngredient: null,
    order: null,
    isOrderViewing: null,
}

function removeDraggedElSplice(array, action) {
    let prevArray = array.slice()
    let newArray = array.slice()
    newArray.splice(action.dragIndex, 1)
    newArray.splice(action.hoverIndex, 0, prevArray[action.dragIndex])
    return newArray
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
            if (action.item1.type !== 'bun') {
                return {
                    ...state,
                    ingrsInCart: [...state.ingrsInCart].concat(action.item1)
                }
            } else {
                return {
                    ...state,
                    bun: action.item1
                }
            };
        }
       case DELETE_ITEM_FROM_CONSTRUCTOR: {
            return {
                ...state,
                ingrsInCart: [...state.ingrsInCart.filter(item => item.idtd !== action.idtd)]
            }
        }
        case MOVE_INGREDIENTS: {
            return {
                ...state,
                ingrsInCart: removeDraggedElSplice(state.ingrsInCart, action)
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
        case SET_ORDER_MODAL_POS: {
            return {
                ...state,
                isOrderViewing: action.pos
            }
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
                order: action.orderNumber
            };
        }
        default: {
            return state;
        }
    }
}