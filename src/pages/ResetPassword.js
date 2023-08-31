import React from 'react';
import styles from './ResetPassword.module.css';

import {
    Button, Input, PasswordInput
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from '../utils/useForm';
import { useDispatch } from 'react-redux';
import { resetPasswordWithCode } from '../services/actions/user';
import { ROUTES } from '../utils/constants';

//На экране /reset-password пользователь вводит новый пароль и код из имейла, а после нажимает кнопку «Сохранить». 

function ResetPassword() {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const form = useForm({
        password: '',
        token: ''
    });

    function handleSubmit() {
        
        dispatch(resetPasswordWithCode(form.values.password, form.values.token));
        navigate(ROUTES.login);
    }

    return (
        <div className={styles.formpagecontent}>
        <h1 className="text text_type_main-medium">Восстановление пароля</h1>
        <PasswordInput
            onChange={form.handleInputChange}
            value={form.values.password}
            name={'password'}
            extraClass="mt-6"
        />
        <Input
            type={'text'}
            placeholder={'Код из E-mail'}
            onChange={form.handleInputChange}
            value={form.values.token}
            name={'token'}
            error={false}
            errorText={'Ошибка'}
            size={'default'}
            extraClass="mt-6"
        />
        <Button extraClass="mt-6" htmlType="button" type="primary" size="medium" onClick={handleSubmit}>Сохранить</Button>
        <div className="text text_type_main-default text_color_inactive mt-20">Вспомнили пароль? <Link className={styles.accent} to="/login">Войти</Link></div>
        </div>
    )
}

export default ResetPassword;