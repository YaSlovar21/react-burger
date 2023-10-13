import { LOGIN_SUCCESS, LOGOUT_SUCCESS, REGISTER_USER_SUCCESS, RESET_PASSWORD_SUCCESS, SET_USER } from "../actions/user";
import { userReducer, initialState } from "./user";

describe('user reducer', () => {

    it('should return the initial state', () => {
        expect(userReducer(undefined, {} as any)).toEqual(initialState);
    });


    it('should handle login success', () => {
        expect(
            userReducer(
                initialState,
                {
                    type: LOGIN_SUCCESS,
                    name: 'Slava',
                    email: '12345@yandex.ru',
                }
            )
        ).toEqual({
            ...initialState,
            name: 'Slava',
            email: '12345@yandex.ru',
            isLoggedIn: true,
        })
    });

    it('should handle register success', () => {
        expect(
            userReducer(
                initialState,
                {
                    type: REGISTER_USER_SUCCESS,
                    name: 'Slava',
                    email: '12345@yandex.ru',
                }
            )
        ).toEqual({
            ...initialState,
            name: 'Slava',
            email: '12345@yandex.ru',
            isLoggedIn: true,
        })
    });

    it('should handle set userdata success', () => {
        expect(
            userReducer(
                initialState,
                {
                    type: SET_USER,
                    name: 'Slava',
                    email: '12345@yandex.ru',
                }
            )
        ).toEqual({
            ...initialState,
            name: 'Slava',
            email: '12345@yandex.ru',
            isLoggedIn: true,
        })
    });

    it('should handle logout success', () => {
        expect(
            userReducer(
                initialState,
                {
                    type: LOGOUT_SUCCESS,
                }
            )
        ).toEqual({
            ...initialState,
            name: null,
            email: null,
            isLoggedIn: false,
        })
    });


    it('should handle reset password success', () => {
        expect(
            userReducer(
                initialState,
                {
                    type: RESET_PASSWORD_SUCCESS,
                }
            )
        ).toEqual({
            ...initialState,
            isPasswordReseted: true
        })
    });
});