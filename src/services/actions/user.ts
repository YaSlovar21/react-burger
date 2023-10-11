import { getUserInfo, loginRequest, logoutRequest, passwordResetSend, registerRequest, requestToPasswordReset, updateUserInfo } from "../../utils/burger-api";
import { setCookie, deleteCookie, getCookie } from "../../utils/utils";
import { AppDispatch, AppThunkAction } from "../types";

export const SET_USER: 'SET_USER' = 'SET_USER';
export const SET_USER_LOGOUT: 'SET_USER_LOGOUT' = 'SET_USER_LOGOUT';

export const REGISTER_USER_SUCCESS: 'REGISTER_USER_SUCCESS' = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_ERROR: 'REGISTER_USER_ERROR' = 'REGISTER_USER_ERROR';
export const REGISTER_USER_REQUEST: 'REGISTER_USER_REQUEST' = 'REGISTER_USER_REQUEST';

export const LOGIN_SUCCESS: 'LOGIN_SUCCESS' = 'LOGIN_SUCCESS';
export const LOGIN_REQUEST: 'LOGIN_REQUEST' = 'LOGIN_REQUEST';
export const LOGIN_ERROR: 'LOGIN_ERROR' = 'LOGIN_ERROR';

export const LOGOUT_SUCCESS: 'LOGOUT_SUCCESS' = 'LOGOUT_SUCCESS';
export const LOGOUT_REQUEST: 'LOGOUT_REQUEST' = 'LOGOUT_REQUEST';
export const LOGOUT_ERROR: 'LOGOUT_ERROR' = 'LOGOUT_ERROR';

export const RECOVERBYEMAIL_PASSWORD_REQUEST: 'RECOVERBYEMAIL_PASSWORD_REQUEST' = 'RECOVERBYEMAIL_PASSWORD_REQUEST';
export const RECOVERBYEMAIL_PASSWORD_SUCCESS: 'RECOVERBYEMAIL_PASSWORD_SUCCESS' = 'RECOVERBYEMAIL_PASSWORD_SUCCESS';
export const RECOVERBYEMAIL_PASSWORD_ERROR: 'RECOVERBYEMAIL_PASSWORD_SUCCESS' = 'RECOVERBYEMAIL_PASSWORD_SUCCESS';

export const RESET_PASSWORD_REQUEST: 'RESET_PASSWORD_REQUEST' = 'RESET_PASSWORD_REQUEST';
export const RESET_PASSWORD_SUCCESS: 'RESET_PASSWORD_SUCCESS' = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_ERROR: 'RESET_PASSWORD_ERROR' = 'RESET_PASSWORD_ERROR';

export interface IRegisterAction {
    readonly type: typeof REGISTER_USER_REQUEST
};
  
export interface IRegisterFailedAction {
    readonly type: typeof REGISTER_USER_ERROR
};

export interface IRegisterSuccessAction {
    readonly type: typeof REGISTER_USER_SUCCESS;
    readonly name: string;
    readonly email: string
};

export interface ILoginAction {
    readonly type: typeof LOGIN_REQUEST
};
  
export interface ILoginFailedAction {
    readonly type: typeof LOGIN_ERROR
};

export interface ILoginSuccessAction {
    readonly type: typeof LOGIN_SUCCESS;
    readonly name: string;
    readonly email: string
};

export interface IGetUserDataSuccessAction {
    readonly type: typeof SET_USER;
    readonly name: string;
    readonly email: string
};

export interface IRecoverByEmailSuccessAction {
    readonly type: typeof RECOVERBYEMAIL_PASSWORD_SUCCESS;
};

export interface IRecoverByEmailFailedAction {
    readonly type: typeof RECOVERBYEMAIL_PASSWORD_ERROR;
};

export interface IResetPasswordSuccessAction {
    readonly type: typeof RESET_PASSWORD_SUCCESS;
};

export interface IResetPasswordFailedAction {
    readonly type: typeof RESET_PASSWORD_ERROR;
};

export interface ILogoutSuccessAction {
    readonly type: typeof LOGOUT_SUCCESS;
};

export type TUserActions = IRegisterAction
    | IRegisterFailedAction
    | IRegisterSuccessAction
    | ILoginAction
    | ILoginFailedAction
    | ILoginSuccessAction
    | IGetUserDataSuccessAction
    | IRecoverByEmailSuccessAction
    | IRecoverByEmailSuccessAction
    | IResetPasswordSuccessAction
    | IResetPasswordFailedAction
    | ILogoutSuccessAction;

export const register = (name:string, email:string, password:string):AppThunkAction => (dispatch: AppDispatch) => { 
        dispatch({
            type: REGISTER_USER_REQUEST
        });
        registerRequest(name, email, password) 
            .then(res => {
                if (res.success) {
                    dispatch({
                        type: REGISTER_USER_SUCCESS,
                        name: res.user.name,
                        email: res.user.email,
                    });
                    let accessToken1, refreshToken;
                    accessToken1 = res.accessToken.split('Bearer ')[1];
                    refreshToken = res.refreshToken;
                    setCookie('accessToken', accessToken1);
                    setCookie('refreshToken', refreshToken);
                } else {
                    Promise.reject(`Произошла ошибка при попытке регистрации пользователя. Ошибка ${res.status}`)
                }
            })
            .catch(e => {
                console.log(e);
                dispatch({
                    type: REGISTER_USER_ERROR,
                })
            });
    }


export const login = (email:string, password:string) :AppThunkAction => (dispatch: AppDispatch) => { 
        dispatch({
            type: LOGIN_REQUEST
        });
        loginRequest(email, password) 
            .then(res =>{
                if (res.success) {
                    dispatch({
                        type: LOGIN_SUCCESS,
                        name: res.user.name,
                        email: res.user.email
                    });
                    let accessToken1, refreshToken;
                    accessToken1 = res.accessToken.split('Bearer ')[1];
                    refreshToken = res.refreshToken;
                    setCookie('accessToken', accessToken1);
                    setCookie('refreshToken', refreshToken);
                } else {
                    Promise.reject(`Произошла ошибка при попытке регистрации пользователя. Ошибка ${res.status}`)
                }
            })
            .catch(e => {
                console.log(e);
                dispatch({
                    type: REGISTER_USER_ERROR,
                })
            });
    }

export const getUserData = () :AppThunkAction => (dispatch: AppDispatch) => { 
        getUserInfo()
            .then(res => {
                if (res.success) {
                    dispatch({
                        type: SET_USER,
                        name: res.user.name,
                        email: res.user.email
                    });
                } else {
                    Promise.reject(`Произошла ошибка при получении данных пользователя с сервера. Ошибка ${res.status}`)
                }
            })
            .catch(e => console.log(e))
    }


export const updateUserAction = (name:string, email:string, password:string) :AppThunkAction => (dispatch: AppDispatch) => { 
        const newData = {
            ...(!!password && {password}),
            name,
            email
         }
        updateUserInfo(newData)
            .then(res => {
                if (res.success) {
                    dispatch({
                        type: SET_USER,
                        name: res.user.name,
                        email: res.user.email
                    });
                } else {
                    Promise.reject(`Произошла ошибка при обновлении данных пользователя на сервера. Ошибка ${res.status}`)
                }
            })
            .catch(e => console.log(e))
    }


export const logout = () :AppThunkAction => (dispatch: AppDispatch) => { 
        logoutRequest(getCookie('refreshToken') as string)
            .then(res => {
                if (res.success) {
                    dispatch({
                        type: LOGOUT_SUCCESS
                    });
                    deleteCookie();
                } else {
                    Promise.reject(`Произошла ошибка при выходе из профиля. Ошибка ${res.status}`)
                }
            })
            .catch(e => console.log(e));
    }


export const forgotPasswordByEmail = (email:string) :AppThunkAction => (dispatch: AppDispatch) => { 
        //dispatch({
        //    type: RECOVERBYEMAIL_PASSWORD_REQUEST
        //})
        requestToPasswordReset(email)
            .then(res => {
                if (res.success) {
                    dispatch({
                        type: RECOVERBYEMAIL_PASSWORD_SUCCESS
                    })
                } else {
                    dispatch({
                        type: RECOVERBYEMAIL_PASSWORD_ERROR
                    })
                    Promise.reject(`Сервер не дал ответ на запрос о восстановлении пароля по электронной почте. Ошибка ${res.status}`)
                }
            })
            .catch(e => console.log(e));
    }


export const resetPasswordWithCode = (email:string, code:string) :AppThunkAction => (dispatch: AppDispatch) => { 
        /*dispatch({
            type: RESET_PASSWORD_REQUEST
        })*/
        passwordResetSend(email, code)
            .then(res => {
                console.log('1234', res);
                if (res.success) {
                    dispatch({
                        type: RESET_PASSWORD_SUCCESS
                    })
                } else {
                    dispatch({
                        type: RESET_PASSWORD_ERROR
                    })
                    Promise.reject(`Сервер не дал ответ на запрос об обновлении пароля. Ошибка ${res.status}`)
                }
            })
            .catch(e => console.log(e));
    }
