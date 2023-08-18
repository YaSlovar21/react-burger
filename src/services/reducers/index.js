import { combineReducers } from "redux";

import { constructorReducer } from "./constructor";
import { getIngredientReducer } from "./get-ingredients";
import { modalIngredientReducer } from "./modal-ingredient";
import { sendOrderReducer } from "./send-order";

export const rootReducer = combineReducers({
    ingredients: getIngredientReducer,
    cart: constructorReducer,
    order: sendOrderReducer,
    modalIngredient: modalIngredientReducer
});