import { combineReducers } from "redux";

import { constructorReducer } from "./constructor";
import { getIngredientReducer } from "./get-ingredients";
import { modalIngredientReducer } from "./modal-ingredient";
import { sendOrderReducer } from "./send-order";
import { userReducer } from "./user";
import { wsOrdersAllReducer } from "./wsOrdersAllReducer";
import { wsOrdersAuthReducer } from "./wsOrdersAuthReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    ingredients: getIngredientReducer,
    cart: constructorReducer,
    order: sendOrderReducer,
    ordersFeedAll: wsOrdersAllReducer,
    ordersOfUser: wsOrdersAuthReducer,
    modalIngredient: modalIngredientReducer
});