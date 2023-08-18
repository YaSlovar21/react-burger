import {
  SOME_INGR_VIEWING,
  SOME_INGR_VIEWING_CLEAR,
} from "../actions/modal-ingredient";

const initialState = {
    viewingIngredient: null,
}

export const modalIngredientReducer = (state = initialState, action) => {
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
        viewingIngredient: null,
      };
    }
    default: {
      return state;
    }
  }
};
