import { LOGIN_SUCCESS, LOGOUT_SUCCESS, REGISTER_USER_SUCCESS, SET_USER } from "../actions/user"


const initialState = {
    name: null,
    email: null,
    isLoggedIn: false
}

export const userReducer = (state = initialState, action) =>{
    switch (action.type) {
        case LOGIN_SUCCESS: {
            return {
                ...state,
                name: action.name,
                email: action.email,
                isLoggedIn: true
            }
        }
        case REGISTER_USER_SUCCESS: {
            return {
                ...state,
                name: action.name,
                email: action.email,
                isLoggedIn: true
            }
        }
        case SET_USER: {
            return {
                ...state,
                name: action.name,
                email: action.email,
                isLoggedIn: true
            }
        } 
        case LOGOUT_SUCCESS: {
            return {
                ...state,
                name: null,
                email: null,
                isLoggedIn: false
            }
        }
        default: {
            return state
        }
    }
}