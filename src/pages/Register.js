import styles from './Register.module.css';

import {
    Button, EmailInput, Input, PasswordInput
} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../services/actions/user';
  

function Register() {
    const inputRef = React.useRef(null)
    const onIconClick = () => {
        setTimeout(() => inputRef.current.focus(), 0)
    }
    const [name, setName] = React.useState('')
    const onChangeName = e => {
        setName(e.target.value)
    }
    const [valueEmail, setValueEmail] = React.useState('')
    const onChangeEmail = e => {
        setValueEmail(e.target.value)
    }
    const [valuePassword, setValuePassword] = React.useState('')
    const onChangePassword = e => {
        setValuePassword(e.target.value)
    }

   
    const dispatch = useDispatch();

    

    function handleSubmit(evt) {
        evt.preventDefault();
        dispatch(register(name, valueEmail, valuePassword));
    }

    return (
        <div className={styles.formpagecontent}>
        <h1 className="text text_type_main-medium">Регистрация</h1>
        <form className={styles.formpagecontent__form} onSubmit={handleSubmit}>
            <Input
                type={'text'}
                placeholder={'Имя'}
                onChange={onChangeName}
                icon={'CurrencyIcon'}
                value={name}
                name={'name'}
                error={false}
                ref={inputRef}
                onIconClick={onIconClick}
                errorText={'Ошибка'}
                size={'default'}
                extraClass="mt-6"
            />
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
            <Button extraClass="mt-6" htmlType="submit" type="primary" size="medium">Зарегистрироваться</Button>
        </form>
        <div className="text text_type_main-default text_color_inactive mt-20">Уже зарегистрированы? <Link className={styles.accent} to="/login">Войти</Link></div>
        </div>
    )
}

export default Register;