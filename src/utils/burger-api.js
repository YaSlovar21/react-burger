import { BASE_URL, LOGIN_URL, ORDER_URL, PASSWORD_RESET_URL, REGISTER_URL } from './constants';

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
            //Authorization: 'Bearer ' + document.cookie('token')
        },
        body: JSON.stringify({email, password})
    })
}

export const registerRequest = (name, email, password) => {
    return fetch(REGISTER_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({name, email, password})
    })
}

export const requestToPasswordReset = (email) => {
    return fetch(PASSWORD_RESET_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            Authorization: 'Bearer ' + document.cookie('token')
        },
        body: JSON.stringify({email})
    })
}

export const passwordResetSend = (password, code) => {
    return fetch(PASSWORD_RESET_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            Authorization: 'Bearer ' + document.cookie('token')
        },
        body: JSON.stringify({password, code})
    }) 
}