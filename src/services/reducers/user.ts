import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_USER_SUCCESS,
  RESET_PASSWORD_SUCCESS,
  SET_USER,
  TUserActions,
} from "../actions/user";

type TUserState = {
  name: string | null;
  email: string | null;
  isLoggedIn: boolean;
  isPasswordReseted: boolean;
}

const initialState:TUserState = {
  name: null,
  email: null,
  isLoggedIn: false,
  isPasswordReseted: false,
};

export const userReducer = (state = initialState, action:TUserActions):TUserState => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return {
        ...state,
        name: action.name,
        email: action.email,
        isLoggedIn: true,
      };
    }
    case REGISTER_USER_SUCCESS: {
      return {
        ...state,
        name: action.name,
        email: action.email,
        isLoggedIn: true,
      };
    }
    case SET_USER: {
      return {
        ...state,
        name: action.name,
        email: action.email,
        isLoggedIn: true,
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        name: null,
        email: null,
        isLoggedIn: false,
      };
    }

    /* ВОССТАНОВЛЕНИЕ ПАРОЛЯ */
    case RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        isPasswordReseted: true,
      };
    }
    default: {
      return state;
    }
  }
};
