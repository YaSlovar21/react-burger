import { BASE_URL, INGRS_URL, LOGIN_URL, LOGOUT_URL, ORDER_URL, PASSWORD_RESET_URL, PASSWORD_RESET_WITH_CODE_URL, REFRESH_TOKEN_URL, REGISTER_URL, USER_URL } from './constants';
import { TIngredient, TIngredientInConstructor } from '../services/types/data';
import { getCookie, setCookie } from './utils';

function checkResponseIsOk(res:Response) {
    if(res.ok) {
        return res.json()
    } else {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
}
export const refreshToken = () => {
    return fetch(`${BASE_URL}${REFRESH_TOKEN_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        token: getCookie("refreshToken"),
      }),
    })
    .then(res => {
        return checkResponseIsOk(res);
    })
  };
  
  export const fetchWithRefresh = async (url :string, options?:RequestInit) => {
    try {
      const res = await fetch(url, options);
      return await checkResponseIsOk(res);

    } catch (err) {

        const refreshData = await refreshToken(); //обновляем токен
        if (!refreshData.success) {
          console.log('Тут ошибка');
          return Promise.reject(refreshData);
        } 
        setCookie("refreshToken", refreshData.refreshToken);
        setCookie("accessToken", refreshData.accessToken?.split('Bearer ')[1]);
        if (options?.headers) {
            (options.headers as { [key: string]: string }).authorization =
                refreshData.accessToken?.split('Bearer ')[1];
        }
        const res = await fetch(url, options); //повторяем запрос
        return await checkResponseIsOk(res);
    }
  };


export const getInitialIngredients = () => {
    return fetch(`${BASE_URL}${INGRS_URL}`)
        .then(res => {
            return checkResponseIsOk(res);
        })
}

export const getUserInfo = () => {
    return fetchWithRefresh(`${BASE_URL}${USER_URL}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            Authorization: 'Bearer ' + getCookie('accessToken')
        }
    })//.then(res => {
       // return checkResponseIsOk(res);
   // })
}

export const updateUserInfo = (data: {name?: string, email?: string, password?: string}) => {
    return fetchWithRefresh(`${BASE_URL}${USER_URL}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            Authorization: 'Bearer ' + getCookie('accessToken')
        },
        body: JSON.stringify(data)
    })
}

export const makeOrderRequest = (ingrArr: TIngredientInConstructor[]) => {
    return fetchWithRefresh(`${BASE_URL}${ORDER_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            Authorization: 'Bearer ' + getCookie('accessToken')
        },
        body: JSON.stringify({ ingredients: ingrArr.map(item => item._id) })
    })
}

export const loginRequest = (email: string, password: string) => {
    return fetch(`${BASE_URL}${LOGIN_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({email, password})
    }).then(res =>{
        return checkResponseIsOk(res);
    })
}

export const registerRequest = (name: string, email: string, password: string) => {
    return fetch(`${BASE_URL}${REGISTER_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({name, email, password})
    }).then(res =>{
        return checkResponseIsOk(res);
    })
}

export const logoutRequest = (token: string) => {
    return fetch(`${BASE_URL}${LOGOUT_URL}`, {
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


export const requestToPasswordReset = (email: string) => {
    return fetch(`${BASE_URL}${PASSWORD_RESET_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({email})
    }).then(res =>{
        return checkResponseIsOk(res);
    })
}

export const passwordResetSend = (password: string, token: string) => {
    return fetch(`${BASE_URL}${PASSWORD_RESET_WITH_CODE_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({password, token})
    }).then(res =>{
        return checkResponseIsOk(res);
    }) 
}