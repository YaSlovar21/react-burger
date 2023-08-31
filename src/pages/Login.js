import styles from './Login.module.css';

import {
    Button, EmailInput, PasswordInput
} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../services/actions/user';
import { ROUTES } from '../utils/constants';
  

function Login() {
    const [valueEmail, setValueEmail] = React.useState('')
    const onChangeEmail = e => {
        setValueEmail(e.target.value)
    }
    const [valuePassword, setValuePassword] = React.useState('')
    const onChangePassword = e => {
        setValuePassword(e.target.value)
    }

    const isLoggedIn = useSelector(store => store.user.isLoggedIn);
    const dispatch = useDispatch();

    if (isLoggedIn) {
        return (
          <Navigate
            to={ROUTES.main}
          />
        );
    }

    function handleSubmit() {
        dispatch(login(valueEmail, valuePassword));
    }

    return (
        <div className={styles.formpagecontent}>
            <h1 className="text text_type_main-medium">Вход</h1>
            <EmailInput
                onChange={onChangeEmail}
                value={valueEmail}
                name={'email'}
                isIcon={false}
                extraClass="mt-6"
            />
            <PasswordInput
                onChange={onChangePassword}
                value={valuePassword}
                name={'password'}
                extraClass="mt-6"
            />
            <Button extraClass="mt-6" htmlType="button" type="primary" size="medium" onClick={handleSubmit}>Войти</Button>
            <div className="text text_type_main-default text_color_inactive mt-20">Вы — новый пользователь? <Link to="/register"  className={styles.accent}>Зарегистрироваться</Link></div>
            <div className="text text_type_main-default text_color_inactive mt-4">Забыли пароль? <Link to="/forgot-password"  className={styles.accent}>Восстановить пароль</Link></div>
        </div>
    )
}

export default Login;