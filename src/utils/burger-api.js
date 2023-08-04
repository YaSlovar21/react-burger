import { BASE_URL } from './constants';

export const getInitialIngredients = () => {
    return fetch(BASE_URL)
        .then(res => {
        if (res.ok) {
            return res.json()
        } else {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        })
}