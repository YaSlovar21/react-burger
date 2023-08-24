import styles from './ForgotPassword.module.css';

import { Button, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import { Link } from 'react-router-dom';
  
//На экране /forgot-password пользователь вводит адрес электронной почты и нажимает кнопку «Восстановить».

function ForgotPassword() {
    const [valueEmail, setValueEmail] = React.useState('password')
    const onChangeEmail = e => {
        setValueEmail(e.target.value)
    }
    return (
        <div className={styles.formpagecontent}> 
            <h1 className="text text_type_main-medium">Восстановление пароля</h1>
            <EmailInput
                onChange={onChangeEmail}
                value={valueEmail}
                name={'email'}
                isIcon={false}
                extraClass="mt-6"
            />
            <Button extraClass="mt-6" htmlType="button" type="primary" size="medium">Восстановить</Button>
            <div className="text text_type_main-default text_color_inactive mt-20">Вспомнили пароль? <Link to="/login">Войти</Link></div>
        </div>
    )
}

export default ForgotPassword;