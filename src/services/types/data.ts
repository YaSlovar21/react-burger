import { WS_CONNECTION_CLOSED, WS_CONNECTION_ERROR, WS_CONNECTION_START, WS_CONNECTION_SUCCESS, WS_GET_MESSAGE } from "../actions/wsActions";
import { WS_AUTH_CONNECTION_CLOSED, WS_AUTH_CONNECTION_ERROR, WS_AUTH_CONNECTION_START, WS_AUTH_CONNECTION_SUCCESS, WS_AUTH_GET_MESSAGE } from "../actions/wsAuthActions";

export type TIngredient = {
    _id: string;
    name: string;
    type: string;
    image: string;
    price: number;
    proteins: number;
    fat: number;
    carbohydrates: number;
    calories: number;
    image_mobile: string;
    image_large: string;
    __v: number;
};

export type TIngredientInConstructor = TIngredient & {
    idtd: string; 
    index: number;
};

export type TOrder = {
    ingredients: string[];
    _id: string;
    name: string;
    status: string;
    number: number;
    createdAt: string;
    updatedAt: string;
}
  

export type TUser = {
    name: string;
    email: string;
    password: string;
}
export type TWsActionsTypes = {

    wsInit: typeof WS_AUTH_CONNECTION_START | typeof WS_CONNECTION_START,
    onOpen: typeof WS_AUTH_CONNECTION_SUCCESS | typeof WS_CONNECTION_SUCCESS,
    onClose: typeof WS_AUTH_CONNECTION_CLOSED | typeof WS_CONNECTION_CLOSED,
    onError: typeof WS_AUTH_CONNECTION_ERROR | typeof WS_CONNECTION_ERROR,
    onMessage: typeof WS_AUTH_GET_MESSAGE | typeof WS_GET_MESSAGE;
  }