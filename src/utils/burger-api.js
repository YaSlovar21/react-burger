import { BASE_URL, ORDER_URL } from './constants';

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