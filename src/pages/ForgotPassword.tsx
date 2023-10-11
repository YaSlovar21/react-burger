import styles from './ForgotPassword.module.css';

import { Button, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import React, {ChangeEvent, FormEvent} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from '../services/hooks';
import { forgotPasswordByEmail } from '../services/actions/user';
import { ROUTES } from '../utils/constants';
  
//На экране /forgot-password пользователь вводит адрес электронной почты и нажимает кнопку «Восстановить».

function ForgotPassword() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [valueEmail, setValueEmail] = React.useState('')
    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setValueEmail(e.target.value)
    }

    function handleSubmit(evt:FormEvent) {
        evt.preventDefault();
        //Redux в данном спринте не трогаем
        dispatch(forgotPasswordByEmail(valueEmail));
        navigate(ROUTES.resetPassword);
    }

    return (
        <div className={styles.formpagecontent}> 
            <h1 className="text text_type_main-medium">Восстановление пароля</h1>
            <form className={styles.formpagecontent__form} onSubmit={handleSubmit}>
                <EmailInput
                    onChange={onChangeEmail}
                    value={valueEmail}
                    name={'email'}
                    isIcon={false}
                    extraClass="mt-6"
                />
                <Button htmlType="submit" extraClass="mt-6" type="primary" size="medium">Восстановить</Button>
            </form>
            <div className="text text_type_main-default text_color_inactive mt-20">Вспомнили пароль? <Link to="/login" className={styles.accent}>Войти</Link></div>
        </div>
    )
}

export default ForgotPassword;