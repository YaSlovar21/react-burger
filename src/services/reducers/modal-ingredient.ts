import {
  SOME_INGR_VIEWING,
  SOME_INGR_VIEWING_CLEAR,
  TModalIngredientActions,
} from "../actions/modal-ingredient";
import { TIngredient } from "../types/data";

type TModalIngredientState = {
  viewingIngredient: TIngredient | undefined;
}

export const initialState: TModalIngredientState = {
  viewingIngredient: undefined,
}

export const modalIngredientReducer = (state = initialState, action:TModalIngredientActions):TModalIngredientState => {
  switch (action.type) {
    case SOME_INGR_VIEWING: {
      return {
        ...state,
        viewingIngredient: action.ingredient,
      };
    }
    case SOME_INGR_VIEWING_CLEAR: {
      return {
        ...state,
        viewingIngredient: undefined,
      };
    }
    default: {
      return state;
    }
  }
};
