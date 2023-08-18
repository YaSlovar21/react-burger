import {
  ADD_ITEM_TO_CONSTRUCTOR,
  DELETE_ITEM_FROM_CONSTRUCTOR,
  MOVE_INGREDIENTS,
} from "../actions/constructor";

function removeDraggedElSplice(array, action) {
  let prevArray = array.slice();
  let newArray = array.slice();
  newArray.splice(action.dragIndex, 1);
  newArray.splice(action.hoverIndex, 0, prevArray[action.dragIndex]);
  return newArray;
}

const initialState = {
  bun: null,
  ingrsInCart: [],
};

export const constructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CONSTRUCTOR: {
      if (action.item1.type !== "bun") {
        return {
          ...state,
          ingrsInCart: [...state.ingrsInCart].concat(action.item1),
        };
      } else {
        return {
          ...state,
          bun: action.item1,
        };
      }
    }
    case DELETE_ITEM_FROM_CONSTRUCTOR: {
      return {
        ...state,
        ingrsInCart: [
          ...state.ingrsInCart.filter((item) => item.idtd !== action.idtd),
        ],
      };
    }
    case MOVE_INGREDIENTS: {
      return {
        ...state,
        ingrsInCart: removeDraggedElSplice(state.ingrsInCart, action),
      };
    }
    default: {
      return state;
    }
  }
};
