import { combineReducers } from "redux";

import { constructorReducer } from "./constructor";
import { getIngredientReducer } from "./get-ingredients";
import { modalIngredientReducer } from "./modal-ingredient";
import { sendOrderReducer } from "./send-order";
import { userReducer } from "./user";

export const rootReducer = combineReducers({
    user: userReducer,
    
    ingredients: getIngredientReducer,
    cart: constructorReducer,
    order: sendOrderReducer,
    modalIngredient: modalIngredientReducer
});