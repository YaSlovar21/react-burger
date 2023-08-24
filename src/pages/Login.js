import styles from './Login.module.css';

import {
    Button, EmailInput, PasswordInput
} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import { Link } from 'react-router-dom';
  

function Login() {
    const [valueEmail, setValueEmail] = React.useState('bob@example.com')
    const onChangeEmail = e => {
        setValueEmail(e.target.value)
    }
    const [valuePassword, setValuePassword] = React.useState('password')
    const onChangePassword = e => {
        setValuePassword(e.target.value)
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
            <Button extraClass="mt-6" htmlType="button" type="primary" size="medium">Войти</Button>
            <div className="text text_type_main-default text_color_inactive mt-20">Вы — новый пользователь? <Link to="/register">Зарегистрироваться</Link></div>
            <div className="text text_type_main-default text_color_inactive mt-4">Забыли пароль? <Link to="/forgot-password">Восстановить пароль</Link></div>
        </div>
    )
}

export default Login;