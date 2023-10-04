export const BASE_URL = 'https://norma.nomoreparties.space/api/ingredients';
export const ORDER_URL = 'https://norma.nomoreparties.space/api/orders';

export const PASSWORD_RESET_URL = 'https://norma.nomoreparties.space/api/password-reset'; //отправляем емэйл
export const PASSWORD_RESET_WITH_CODE_URL = 'https://norma.nomoreparties.space/api/password-reset/reset'; //отправляем новый пароль с кодом верификации
export const REGISTER_URL = 'https://norma.nomoreparties.space/api/auth/register';
export const LOGIN_URL = 'https://norma.nomoreparties.space/api/auth/login';
export const LOGOUT_URL = 'https://norma.nomoreparties.space/api/auth/logout';
export const REFRESH_TOKEN_URL = 'https://norma.nomoreparties.space/api/auth/token';


export const USER_URL = 'https://norma.nomoreparties.space/api/auth/user'; // эндпоинт получения данных о пользователе.


export const ESC_CODE = 'Escape';

export const ROUTES = {
    main: '/',
    login: '/login',
    register: '/register',
    forgotPassword: '/forgot-password',
    resetPassword: '/reset-password',
    profile: '/profile',
    profileOrders: '/profile/orders',
    profileOrderItem: '/profile/orders/:id',
    ingredient: '/ingredients/:id',
    feed: '/feed',
    feedOrderItem: '/feed/:id'
}
          
          

export const ordersAllWs = {
    "success": true,
    "orders": [
        {
            "_id": "651b72e36d2997001caac924",
            "ingredients": [
                "643d69a5c3f7b9001cfa0943",
                "643d69a5c3f7b9001cfa093d",
                "643d69a5c3f7b9001cfa093d"
            ],
            "status": "done",
            "name": "Space флюоресцентный бургер",
            "createdAt": "2023-10-03T01:48:19.977Z",
            "updatedAt": "2023-10-03T01:48:20.154Z",
            "number": 21969
        },
        {
            "_id": "651b3abc6d2997001caac8f3",
            "ingredients": [
                "643d69a5c3f7b9001cfa093d",
                "643d69a5c3f7b9001cfa0943",
                "643d69a5c3f7b9001cfa093d"
            ],
            "status": "done",
            "name": "Space флюоресцентный бургер",
            "createdAt": "2023-10-02T21:48:44.666Z",
            "updatedAt": "2023-10-02T21:48:44.889Z",
            "number": 21968
        },
        {
            "_id": "651b302c6d2997001caac8e9",
            "ingredients": [
                "643d69a5c3f7b9001cfa093d",
                "643d69a5c3f7b9001cfa0943",
                "643d69a5c3f7b9001cfa093d"
            ],
            "status": "done",
            "name": "Space флюоресцентный бургер",
            "createdAt": "2023-10-02T21:03:40.632Z",
            "updatedAt": "2023-10-02T21:03:40.918Z",
            "number": 21967
        },
        {
            "_id": "651b2c906d2997001caac8e3",
            "ingredients": [
                "643d69a5c3f7b9001cfa093d",
                "643d69a5c3f7b9001cfa0945",
                "643d69a5c3f7b9001cfa0943",
                "643d69a5c3f7b9001cfa093d"
            ],
            "status": "done",
            "name": "Space антарианский флюоресцентный бургер",
            "createdAt": "2023-10-02T20:48:16.347Z",
            "updatedAt": "2023-10-02T20:48:16.573Z",
            "number": 21966
        },
        {
            "_id": "651b196a6d2997001caac8a9",
            "ingredients": [
                "643d69a5c3f7b9001cfa093d",
                "643d69a5c3f7b9001cfa0943",
                "643d69a5c3f7b9001cfa0945",
                "643d69a5c3f7b9001cfa093d"
            ],
            "status": "done",
            "name": "Space антарианский флюоресцентный бургер",
            "createdAt": "2023-10-02T19:26:34.463Z",
            "updatedAt": "2023-10-02T19:26:34.646Z",
            "number": 21965
        },
        {
            "_id": "651b0a736d2997001caac885",
            "ingredients": [
                "643d69a5c3f7b9001cfa093d",
                "643d69a5c3f7b9001cfa0943",
                "643d69a5c3f7b9001cfa0942",
                "643d69a5c3f7b9001cfa093d"
            ],
            "status": "done",
            "name": "Space флюоресцентный spicy бургер",
            "createdAt": "2023-10-02T18:22:43.946Z",
            "updatedAt": "2023-10-02T18:22:44.180Z",
            "number": 21964
        },
        {
            "_id": "651b085a6d2997001caac87f",
            "ingredients": [
                "643d69a5c3f7b9001cfa093d",
                "643d69a5c3f7b9001cfa093e",
                "643d69a5c3f7b9001cfa0942",
                "643d69a5c3f7b9001cfa0943",
                "643d69a5c3f7b9001cfa094a",
                "643d69a5c3f7b9001cfa093d"
            ],
            "status": "done",
            "name": "Space астероидный spicy флюоресцентный люминесцентный бургер",
            "createdAt": "2023-10-02T18:13:46.208Z",
            "updatedAt": "2023-10-02T18:13:46.418Z",
            "number": 21963
        },
        {
            "_id": "651b080d6d2997001caac87d",
            "ingredients": [
                "643d69a5c3f7b9001cfa093d",
                "643d69a5c3f7b9001cfa093e",
                "643d69a5c3f7b9001cfa0942",
                "643d69a5c3f7b9001cfa0943",
                "643d69a5c3f7b9001cfa093d"
            ],
            "status": "done",
            "name": "Space люминесцентный флюоресцентный spicy бургер",
            "createdAt": "2023-10-02T18:12:29.307Z",
            "updatedAt": "2023-10-02T18:12:29.530Z",
            "number": 21962
        },
        {
            "_id": "651b075e6d2997001caac878",
            "ingredients": [
                "643d69a5c3f7b9001cfa093d",
                "643d69a5c3f7b9001cfa0943",
                "643d69a5c3f7b9001cfa0942",
                "643d69a5c3f7b9001cfa093d"
            ],
            "status": "done",
            "name": "Space флюоресцентный spicy бургер",
            "createdAt": "2023-10-02T18:09:34.334Z",
            "updatedAt": "2023-10-02T18:09:34.638Z",
            "number": 21961
        },
        {
            "_id": "651b070b6d2997001caac876",
            "ingredients": [
                "643d69a5c3f7b9001cfa093d",
                "643d69a5c3f7b9001cfa0943",
                "643d69a5c3f7b9001cfa093d"
            ],
            "status": "done",
            "name": "Space флюоресцентный бургер",
            "createdAt": "2023-10-02T18:08:11.457Z",
            "updatedAt": "2023-10-02T18:08:11.662Z",
            "number": 21960
        },
        {
            "_id": "651af45b6d2997001caac843",
            "ingredients": [
                "643d69a5c3f7b9001cfa0943"
            ],
            "status": "done",
            "name": "Space бургер",
            "createdAt": "2023-10-02T16:48:27.900Z",
            "updatedAt": "2023-10-02T16:48:28.123Z",
            "number": 21959
        },
        {
            "_id": "651aea0d6d2997001caac814",
            "ingredients": [
                "643d69a5c3f7b9001cfa093d",
                "643d69a5c3f7b9001cfa093d"
            ],
            "status": "done",
            "name": "Флюоресцентный бургер",
            "createdAt": "2023-10-02T16:04:29.051Z",
            "updatedAt": "2023-10-02T16:04:29.263Z",
            "number": 21958
        },
        {
            "_id": "651ad5bd6d2997001caac7c0",
            "ingredients": [
                "643d69a5c3f7b9001cfa0943",
                "643d69a5c3f7b9001cfa093d"
            ],
            "status": "done",
            "name": "Space флюоресцентный бургер",
            "createdAt": "2023-10-02T14:37:49.764Z",
            "updatedAt": "2023-10-02T14:37:49.957Z",
            "number": 21957
        },
        {
            "_id": "651ad1e76d2997001caac7b9",
            "ingredients": [
                "643d69a5c3f7b9001cfa093d",
                "643d69a5c3f7b9001cfa093d"
            ],
            "status": "done",
            "name": "Флюоресцентный бургер",
            "createdAt": "2023-10-02T14:21:27.117Z",
            "updatedAt": "2023-10-02T14:21:27.367Z",
            "number": 21956
        },
        {
            "_id": "651ad1a36d2997001caac7b7",
            "ingredients": [
                "643d69a5c3f7b9001cfa093d",
                "643d69a5c3f7b9001cfa093d"
            ],
            "status": "done",
            "name": "Флюоресцентный бургер",
            "createdAt": "2023-10-02T14:20:19.450Z",
            "updatedAt": "2023-10-02T14:20:19.672Z",
            "number": 21955
        },
        {
            "_id": "651acf2a6d2997001caac7ab",
            "ingredients": [
                "643d69a5c3f7b9001cfa093d",
                "643d69a5c3f7b9001cfa0943",
                "643d69a5c3f7b9001cfa0945",
                "643d69a5c3f7b9001cfa093d"
            ],
            "status": "done",
            "name": "Space антарианский флюоресцентный бургер",
            "createdAt": "2023-10-02T14:09:46.770Z",
            "updatedAt": "2023-10-02T14:09:46.973Z",
            "number": 21954
        },
        {
            "_id": "651acf1f6d2997001caac7aa",
            "ingredients": [
                "643d69a5c3f7b9001cfa093c",
                "643d69a5c3f7b9001cfa093e",
                "643d69a5c3f7b9001cfa0940",
                "643d69a5c3f7b9001cfa0948",
                "643d69a5c3f7b9001cfa093c"
            ],
            "status": "done",
            "name": "Альфа-сахаридный люминесцентный краторный метеоритный бургер",
            "createdAt": "2023-10-02T14:09:35.444Z",
            "updatedAt": "2023-10-02T14:09:35.687Z",
            "number": 21953
        },
        {
            "_id": "651aaa566d2997001caac73c",
            "ingredients": [
                "643d69a5c3f7b9001cfa093e"
            ],
            "status": "done",
            "name": "Люминесцентный бургер",
            "createdAt": "2023-10-02T11:32:38.091Z",
            "updatedAt": "2023-10-02T11:32:38.274Z",
            "number": 21952
        },
        {
            "_id": "651aa74d6d2997001caac731",
            "ingredients": [
                "643d69a5c3f7b9001cfa093d",
                "643d69a5c3f7b9001cfa0943",
                "643d69a5c3f7b9001cfa0943",
                "643d69a5c3f7b9001cfa093d"
            ],
            "status": "done",
            "name": "Space флюоресцентный бургер",
            "createdAt": "2023-10-02T11:19:41.329Z",
            "updatedAt": "2023-10-02T11:19:41.575Z",
            "number": 21951
        },
        {
            "_id": "651aa6fe6d2997001caac72f",
            "ingredients": [
                "643d69a5c3f7b9001cfa093c",
                "643d69a5c3f7b9001cfa0949",
                "643d69a5c3f7b9001cfa093c"
            ],
            "status": "done",
            "name": "Краторный экзо-плантаго бургер",
            "createdAt": "2023-10-02T11:18:22.798Z",
            "updatedAt": "2023-10-02T11:18:22.977Z",
            "number": 21950
        },
        {
            "_id": "651aa5f26d2997001caac72b",
            "ingredients": [
                "643d69a5c3f7b9001cfa093d",
                "643d69a5c3f7b9001cfa0945",
                "643d69a5c3f7b9001cfa0945",
                "643d69a5c3f7b9001cfa0943",
                "643d69a5c3f7b9001cfa0943",
                "643d69a5c3f7b9001cfa093d"
            ],
            "status": "done",
            "name": "Space антарианский флюоресцентный бургер",
            "createdAt": "2023-10-02T11:13:54.242Z",
            "updatedAt": "2023-10-02T11:13:54.463Z",
            "number": 21949
        },
        {
            "_id": "651aa5d76d2997001caac72a",
            "ingredients": [
                "643d69a5c3f7b9001cfa093d",
                "643d69a5c3f7b9001cfa0945",
                "643d69a5c3f7b9001cfa0945",
                "643d69a5c3f7b9001cfa0945",
                "643d69a5c3f7b9001cfa0945",
                "643d69a5c3f7b9001cfa093d"
            ],
            "status": "done",
            "name": "Антарианский флюоресцентный бургер",
            "createdAt": "2023-10-02T11:13:27.631Z",
            "updatedAt": "2023-10-02T11:13:27.872Z",
            "number": 21948
        },
        {
            "_id": "651a9cfd6d2997001caac708",
            "ingredients": [
                "643d69a5c3f7b9001cfa093d",
                "643d69a5c3f7b9001cfa0943",
                "643d69a5c3f7b9001cfa0942",
                "643d69a5c3f7b9001cfa093d"
            ],
            "status": "done",
            "name": "Space флюоресцентный spicy бургер",
            "createdAt": "2023-10-02T10:35:41.834Z",
            "updatedAt": "2023-10-02T10:35:42.047Z",
            "number": 21947
        },
        {
            "_id": "651a999a6d2997001caac6fa",
            "ingredients": [
                "643d69a5c3f7b9001cfa0943",
                "643d69a5c3f7b9001cfa093d"
            ],
            "status": "done",
            "name": "Space флюоресцентный бургер",
            "createdAt": "2023-10-02T10:21:14.410Z",
            "updatedAt": "2023-10-02T10:21:14.594Z",
            "number": 21946
        },
        {
            "_id": "651a96c06d2997001caac6ef",
            "ingredients": [
                "643d69a5c3f7b9001cfa0943",
                "643d69a5c3f7b9001cfa093d"
            ],
            "status": "done",
            "name": "Space флюоресцентный бургер",
            "createdAt": "2023-10-02T10:09:04.337Z",
            "updatedAt": "2023-10-02T10:09:04.533Z",
            "number": 21945
        },
        {
            "_id": "651a96666d2997001caac6ee",
            "ingredients": [
                "643d69a5c3f7b9001cfa0943",
                "643d69a5c3f7b9001cfa093d"
            ],
            "status": "done",
            "name": "Space флюоресцентный бургер",
            "createdAt": "2023-10-02T10:07:34.614Z",
            "updatedAt": "2023-10-02T10:07:34.858Z",
            "number": 21944
        },
        {
            "_id": "651a959a6d2997001caac6eb",
            "ingredients": [
                "643d69a5c3f7b9001cfa0943",
                "643d69a5c3f7b9001cfa093c"
            ],
            "status": "done",
            "name": "Space краторный бургер",
            "createdAt": "2023-10-02T10:04:10.867Z",
            "updatedAt": "2023-10-02T10:04:11.099Z",
            "number": 21943
        },
        {
            "_id": "651a85986d2997001caac6d2",
            "ingredients": [
                "643d69a5c3f7b9001cfa0943",
                "643d69a5c3f7b9001cfa093d"
            ],
            "status": "done",
            "name": "Space флюоресцентный бургер",
            "createdAt": "2023-10-02T08:55:52.641Z",
            "updatedAt": "2023-10-02T08:55:52.894Z",
            "number": 21942
        },
        {
            "_id": "651a850c6d2997001caac6ce",
            "ingredients": [
                "643d69a5c3f7b9001cfa0943",
                "643d69a5c3f7b9001cfa093d"
            ],
            "status": "done",
            "name": "Space флюоресцентный бургер",
            "createdAt": "2023-10-02T08:53:32.742Z",
            "updatedAt": "2023-10-02T08:53:32.968Z",
            "number": 21941
        },
        {
            "_id": "651a84e86d2997001caac6cd",
            "ingredients": [
                "643d69a5c3f7b9001cfa0943",
                "643d69a5c3f7b9001cfa093d"
            ],
            "status": "done",
            "name": "Space флюоресцентный бургер",
            "createdAt": "2023-10-02T08:52:56.142Z",
            "updatedAt": "2023-10-02T08:52:56.346Z",
            "number": 21940
        },
        {
            "_id": "651a82a16d2997001caac6c9",
            "ingredients": [
                "643d69a5c3f7b9001cfa0943",
                "643d69a5c3f7b9001cfa093d"
            ],
            "status": "done",
            "name": "Space флюоресцентный бургер",
            "createdAt": "2023-10-02T08:43:13.471Z",
            "updatedAt": "2023-10-02T08:43:13.668Z",
            "number": 21939
        },
        {
            "_id": "651a827f6d2997001caac6c8",
            "ingredients": [
                "643d69a5c3f7b9001cfa0943",
                "643d69a5c3f7b9001cfa093d"
            ],
            "status": "done",
            "name": "Space флюоресцентный бургер",
            "createdAt": "2023-10-02T08:42:40.016Z",
            "updatedAt": "2023-10-02T08:42:40.258Z",
            "number": 21938
        },
        {
            "_id": "651a814c6d2997001caac6c6",
            "ingredients": [
                "643d69a5c3f7b9001cfa0943",
                "643d69a5c3f7b9001cfa093d"
            ],
            "status": "done",
            "name": "Space флюоресцентный бургер",
            "createdAt": "2023-10-02T08:37:32.385Z",
            "updatedAt": "2023-10-02T08:37:32.574Z",
            "number": 21937
        },
        {
            "_id": "651a80626d2997001caac6c3",
            "ingredients": [
                "643d69a5c3f7b9001cfa0943",
                "643d69a5c3f7b9001cfa093d"
            ],
            "status": "done",
            "name": "Space флюоресцентный бургер",
            "createdAt": "2023-10-02T08:33:38.061Z",
            "updatedAt": "2023-10-02T08:33:38.286Z",
            "number": 21936
        },
        {
            "_id": "651a79c86d2997001caac690",
            "ingredients": [
                "643d69a5c3f7b9001cfa0943",
                "643d69a5c3f7b9001cfa093d"
            ],
            "status": "done",
            "name": "Space флюоресцентный бургер",
            "createdAt": "2023-10-02T08:05:28.641Z",
            "updatedAt": "2023-10-02T08:05:28.827Z",
            "number": 21935
        },
        {
            "_id": "651a64806d2997001caac650",
            "ingredients": [
                "643d69a5c3f7b9001cfa093d",
                "643d69a5c3f7b9001cfa0943",
                "643d69a5c3f7b9001cfa0942"
            ],
            "status": "done",
            "name": "Space флюоресцентный spicy бургер",
            "createdAt": "2023-10-02T06:34:40.836Z",
            "updatedAt": "2023-10-02T06:34:41.050Z",
            "number": 21934
        },
        {
            "_id": "651a647d6d2997001caac64f",
            "ingredients": [
                "643d69a5c3f7b9001cfa093d",
                "643d69a5c3f7b9001cfa0943",
                "643d69a5c3f7b9001cfa0942"
            ],
            "status": "done",
            "name": "Space флюоресцентный spicy бургер",
            "createdAt": "2023-10-02T06:34:37.224Z",
            "updatedAt": "2023-10-02T06:34:37.482Z",
            "number": 21933
        },
        {
            "_id": "651a64386d2997001caac64d",
            "ingredients": [
                "643d69a5c3f7b9001cfa093d",
                "643d69a5c3f7b9001cfa0943",
                "643d69a5c3f7b9001cfa0943"
            ],
            "status": "done",
            "name": "Space флюоресцентный бургер",
            "createdAt": "2023-10-02T06:33:28.515Z",
            "updatedAt": "2023-10-02T06:33:28.689Z",
            "number": 21932
        },
        {
            "_id": "651a641c6d2997001caac64b",
            "ingredients": [
                "643d69a5c3f7b9001cfa093d"
            ],
            "status": "done",
            "name": "Флюоресцентный бургер",
            "createdAt": "2023-10-02T06:33:00.512Z",
            "updatedAt": "2023-10-02T06:33:00.681Z",
            "number": 21931
        },
        {
            "_id": "651a640d6d2997001caac64a",
            "ingredients": [
                "643d69a5c3f7b9001cfa093d"
            ],
            "status": "done",
            "name": "Флюоресцентный бургер",
            "createdAt": "2023-10-02T06:32:45.039Z",
            "updatedAt": "2023-10-02T06:32:45.246Z",
            "number": 21930
        },
        {
            "_id": "651a640b6d2997001caac649",
            "ingredients": [
                "643d69a5c3f7b9001cfa093d"
            ],
            "status": "done",
            "name": "Флюоресцентный бургер",
            "createdAt": "2023-10-02T06:32:43.550Z",
            "updatedAt": "2023-10-02T06:32:43.781Z",
            "number": 21929
        },
        {
            "_id": "651a63f86d2997001caac647",
            "ingredients": [
                "643d69a5c3f7b9001cfa093d",
                "643d69a5c3f7b9001cfa0943"
            ],
            "status": "done",
            "name": "Space флюоресцентный бургер",
            "createdAt": "2023-10-02T06:32:24.125Z",
            "updatedAt": "2023-10-02T06:32:24.350Z",
            "number": 21928
        },
        {
            "_id": "651a63f66d2997001caac646",
            "ingredients": [
                "643d69a5c3f7b9001cfa093d",
                "643d69a5c3f7b9001cfa0943"
            ],
            "status": "done",
            "name": "Space флюоресцентный бургер",
            "createdAt": "2023-10-02T06:32:22.914Z",
            "updatedAt": "2023-10-02T06:32:23.097Z",
            "number": 21927
        },
        {
            "_id": "651a63f56d2997001caac645",
            "ingredients": [
                "643d69a5c3f7b9001cfa093d",
                "643d69a5c3f7b9001cfa0943"
            ],
            "status": "done",
            "name": "Space флюоресцентный бургер",
            "createdAt": "2023-10-02T06:32:21.331Z",
            "updatedAt": "2023-10-02T06:32:21.562Z",
            "number": 21926
        },
        {
            "_id": "651a3a1a6d2997001caac60a",
            "ingredients": [
                "643d69a5c3f7b9001cfa093c",
                "643d69a5c3f7b9001cfa093e",
                "643d69a5c3f7b9001cfa0940",
                "643d69a5c3f7b9001cfa093e",
                "643d69a5c3f7b9001cfa093c"
            ],
            "status": "done",
            "name": "Люминесцентный краторный метеоритный бургер",
            "createdAt": "2023-10-02T03:33:46.095Z",
            "updatedAt": "2023-10-02T03:33:46.270Z",
            "number": 21925
        },
        {
            "_id": "651a07c26d2997001caac5ec",
            "ingredients": [
                "643d69a5c3f7b9001cfa093d",
                "643d69a5c3f7b9001cfa0941",
                "643d69a5c3f7b9001cfa0940",
                "643d69a5c3f7b9001cfa0946",
                "643d69a5c3f7b9001cfa0949",
                "643d69a5c3f7b9001cfa094a",
                "643d69a5c3f7b9001cfa0943",
                "643d69a5c3f7b9001cfa0944",
                "643d69a5c3f7b9001cfa093d"
            ],
            "status": "done",
            "name": "Space астероидный флюоресцентный экзо-плантаго минеральный био-марсианский традиционный-галактический метеоритный бургер",
            "createdAt": "2023-10-01T23:58:58.759Z",
            "updatedAt": "2023-10-01T23:58:58.949Z",
            "number": 21924
        },
        {
            "_id": "6519c64a6d2997001caac4f9",
            "ingredients": [
                "643d69a5c3f7b9001cfa093c",
                "643d69a5c3f7b9001cfa0943",
                "643d69a5c3f7b9001cfa093e",
                "643d69a5c3f7b9001cfa093c"
            ],
            "status": "done",
            "name": "Space люминесцентный краторный бургер",
            "createdAt": "2023-10-01T19:19:38.806Z",
            "updatedAt": "2023-10-01T19:19:39.045Z",
            "number": 21923
        },
        {
            "_id": "6519bb1d6d2997001caac4c4",
            "ingredients": [
                "643d69a5c3f7b9001cfa093c",
                "643d69a5c3f7b9001cfa093e",
                "643d69a5c3f7b9001cfa0940",
                "643d69a5c3f7b9001cfa0947",
                "643d69a5c3f7b9001cfa0949",
                "643d69a5c3f7b9001cfa0943",
                "643d69a5c3f7b9001cfa0945",
                "643d69a5c3f7b9001cfa093c"
            ],
            "status": "done",
            "name": "Space фалленианский экзо-плантаго люминесцентный антарианский метеоритный краторный бургер",
            "createdAt": "2023-10-01T18:31:57.737Z",
            "updatedAt": "2023-10-01T18:31:58.073Z",
            "number": 21922
        },
        {
            "_id": "6519b3eb6d2997001caac49f",
            "ingredients": [
                "643d69a5c3f7b9001cfa093c",
                "643d69a5c3f7b9001cfa0942",
                "643d69a5c3f7b9001cfa0941",
                "643d69a5c3f7b9001cfa093c"
            ],
            "status": "done",
            "name": "Био-марсианский краторный spicy бургер",
            "createdAt": "2023-10-01T18:01:15.990Z",
            "updatedAt": "2023-10-01T18:01:16.200Z",
            "number": 21921
        },
        {
            "_id": "65193cf46d2997001caac32f",
            "ingredients": [
                "643d69a5c3f7b9001cfa093c",
                "643d69a5c3f7b9001cfa0943",
                "643d69a5c3f7b9001cfa0941"
            ],
            "status": "done",
            "name": "Био-марсианский space краторный бургер",
            "createdAt": "2023-10-01T09:33:40.524Z",
            "updatedAt": "2023-10-01T09:33:40.894Z",
            "number": 21920
        }
    ],
    "total": 21595,
    "totalToday": 37
}