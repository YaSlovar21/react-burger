import { BASE_URL, LOGIN_URL, LOGOUT_URL, ORDER_URL, PASSWORD_RESET_URL, REFRESH_TOKEN_URL, REGISTER_URL, USER_URL } from './constants';
import { getCookie, setCookie } from './utils';

function checkResponseIsOk(res) {
    if(res.ok) {
        return res.json()
    } else {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
}
export const refreshToken = () => {
    return fetch(REFRESH_TOKEN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        token: getCookie("refreshToken"),
      }),
    }).then(res => {
        return checkResponseIsOk(res);
    })
  };
  
  export const fetchWithRefresh = async (url, options) => {
    try {
      const res = await fetch(url, options);
      //return await checkResponseIsOk(res);
      return res;
    } catch (err) {
      if (err.message === "jwt expired") {
        const refreshData = await refreshToken(); //обновляем токен
        if (!refreshData.success) {
          return Promise.reject(refreshData);
        }
        setCookie("refreshToken", refreshData.refreshToken);
        setCookie("accessToken", refreshData.accessToken);
        options.headers.authorization = refreshData.accessToken;
        const res = await fetch(url, options); //повторяем запрос
        // return await checkResponseIsOk(res);
        return res;
      } else {
        return Promise.reject(err);
      }
    }
  };


export const getInitialIngredients = () => {
    return fetch(BASE_URL)
        .then(res => {
            return checkResponseIsOk(res);
        })
}

export const getUserInfo = () => {
    return fetchWithRefresh(USER_URL, {
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
    return fetchWithRefresh(PASSWORD_RESET_URL, {
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
    return fetchWithRefresh(PASSWORD_RESET_URL, {
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