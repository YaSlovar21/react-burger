import React from 'react';
import styles from './ResetPassword.module.css';

import {
    Button, Input, PasswordInput
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';

  
//На экране /reset-password пользователь вводит новый пароль и код из имейла, а после нажимает кнопку «Сохранить». 

function ResetPassword() {
    const inputRef = React.useRef(null);
    const [value, setValue] = React.useState('password')
    const onChange = e => {
        setValue(e.target.value)
    }
    const onIconClick = () => {
        setTimeout(() => inputRef.current.focus(), 0)
        alert('Icon Click Callback')
    }
    return (
        <div className={styles.formpagecontent}>
        <h1 className="text text_type_main-medium">Восстановление пароля</h1>
        <PasswordInput
            onChange={onChange}
            value={1243}
            name={'password'}
            extraClass="mt-6"
        />
        <Input
            type={'text'}
            placeholder={'Код из E-mail'}
            onChange={e => setValue(e.target.value)}
            icon={'CurrencyIcon'}
            value={1234}
            name={'name'}
            error={false}
            ref={inputRef}
            onIconClick={onIconClick}
            errorText={'Ошибка'}
            size={'default'}
            extraClass="mt-6"
        />
        <Button extraClass="mt-6" htmlType="button" type="primary" size="medium">Сохранить</Button>
        <div className="text text_type_main-default text_color_inactive mt-20">Вспомнили пароль? <Link to="/login">Войти</Link></div>
        </div>
    )
}

export default ResetPassword;