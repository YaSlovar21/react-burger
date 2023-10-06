import styles from './Login.module.css';

import {
    Button, EmailInput, PasswordInput
} from '@ya.praktikum/react-developer-burger-ui-components';
import React, { ChangeEvent, FormEvent } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from '../services/hooks';
import { login } from '../services/actions/user';
import { ROUTES } from '../utils/constants';
  

function Login() {
    const [valueEmail, setValueEmail] = React.useState('')
    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setValueEmail(e.target.value)
    }
    const [valuePassword, setValuePassword] = React.useState('')
    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setValuePassword(e.target.value)
    }

    const dispatch = useDispatch();

    function handleSubmit(evt: FormEvent) {
        evt.preventDefault();
        dispatch(login(valueEmail, valuePassword));
    }

    return (
        <div className={styles.formpagecontent}>
            <h1 className="text text_type_main-medium">Вход</h1>
            <form className={styles.formpagecontent__form} onSubmit={handleSubmit}>
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
                <Button extraClass="mt-6" htmlType="submit" type="primary" size="medium">Войти</Button>
            </form>
            <div className="text text_type_main-default text_color_inactive mt-20">Вы — новый пользователь? <Link to="/register"  className={styles.accent}>Зарегистрироваться</Link></div>
            <div className="text text_type_main-default text_color_inactive mt-4">Забыли пароль? <Link to="/forgot-password"  className={styles.accent}>Восстановить пароль</Link></div>
        </div>
    )
}

export default Login;