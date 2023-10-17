import {
  ADD_ITEM_TO_CONSTRUCTOR,
  DELETE_ITEM_FROM_CONSTRUCTOR,
  IConsrtuctorMoveItems,
  MOVE_INGREDIENTS,
  TConstructorActions,
} from "../actions/constructor";
import {  TIngredientInConstructor } from "../types/data";

function removeDraggedElSplice(array:TIngredientInConstructor[], action:IConsrtuctorMoveItems) {
  let prevArray = array.slice();
  let newArray = array.slice();
  newArray.splice(action.dragIndex, 1);
  newArray.splice(action.hoverIndex, 0, prevArray[action.dragIndex]);
  return newArray;
}

type TConstructorState = {
  bun: TIngredientInConstructor | undefined;
  ingrsInCart: TIngredientInConstructor[]
}

export const initialState:TConstructorState = {
  bun: undefined,
  ingrsInCart: [],
};

export const constructorReducer = (state = initialState, action: TConstructorActions):TConstructorState => {
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
