import type { ThunkAction, ThunkDispatch } from "redux-thunk";
import { TConstructorActions } from "../actions/constructor";
import { TGetIngredientsActions } from "../actions/get-ingredients";
import { TModalIngredientActions } from "../actions/modal-ingredient";
import { TOrderActions } from "../actions/send-order";
import { TUserActions } from "../actions/user";
import { TWSActions } from "../actions/wsActions";
import { TWSAuthActions } from "../actions/wsAuthActions";
import { store } from "../store";

export type TApplicationActions = TWSActions
    | TWSAuthActions
    | TConstructorActions
    | TGetIngredientsActions
    | TModalIngredientActions
    | TOrderActions
    | TUserActions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, unknown, TApplicationActions>;
export type AppThunkAction<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, TApplicationActions>;