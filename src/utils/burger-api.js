import { BASE_URL, LOGIN_URL, LOGOUT_URL, ORDER_URL, PASSWORD_RESET_URL, REGISTER_URL, USER_URL } from './constants';
import { getCookie } from './utils';

function checkResponseIsOk(res) {
    if(res.ok) {
        return res.json()
    } else {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
}

export const getInitialIngredients = () => {
    return fetch(BASE_URL)
        .then(res => {
            return checkResponseIsOk(res);
        })
}

export const getUserInfo = () => {
    return fetch(USER_URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            Authorization: 'Bearer ' + getCookie('accessToken')
        }
    }).then(res => {
        return checkResponseIsOk(res);
    })
}

export const makeOrderRequest = (ingrArr) => {
    return fetch(ORDER_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({ ingredients: ingrArr.map(item => item._id) })
    }).then(res =>{
        return checkResponseIsOk(res);
    })
}

export const loginRequest = (email, password) => {
    return fetch(LOGIN_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({email, password})
    }).then(res =>{
        return checkResponseIsOk(res);
    })
}

export const registerRequest = (name, email, password) => {
    return fetch(REGISTER_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({name, email, password})
    }).then(res =>{
        return checkResponseIsOk(res);
    })
}

export const logoutRequest = (token) => {
    return fetch(LOGOUT_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            Authorization: 'Bearer ' + getCookie('accessToken')
        },
        body: JSON.stringify({token})
    }).then(res =>{
        return checkResponseIsOk(res);
    })
}


export const requestToPasswordReset = (email) => {
    return fetch(PASSWORD_RESET_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            Authorization: 'Bearer ' + getCookie('accessToken')
        },
        body: JSON.stringify({email})
    }).then(res =>{
        return checkResponseIsOk(res);
    })
}

export const passwordResetSend = (password, token) => {
    return fetch(PASSWORD_RESET_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            Authorization: 'Bearer ' + getCookie('accessToken')
        },
        body: JSON.stringify({password, token})
    }).then(res =>{
        return checkResponseIsOk(res);
    }) 
}