import styles from './Profile.module.css';

import {
    Button, EmailInput, Input, PasswordInput
} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
  

function Profile() {
    const inputRef = React.useRef(null);
    const onIconClick = () => {
        setTimeout(() => inputRef.current.focus(), 0)
        alert('Icon Click Callback')
    }
    const [name, setName] = React.useState('Иван')
    const onChangeName = e => {
        setName(e.target.value)
    }
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
        <div className={`mr-15 ${styles.formpagecontent__menu}`}>
        <ul className={styles.navlist}>
            <li className={`text text_type_main-medium ${styles.navlist__item}`}>Профиль</li>
            <li className={`text text_type_main-medium ${styles.navlist__item}`}>История заказов</li>
            <li className={`text text_type_main-medium ${styles.navlist__item}`}>Выход</li>
        </ul>
        <p className="text text_type_main-default text_color_inactive mt-20">В этом разделе вы можете изменить свои персональные данные</p>
        </div>
        <form>
            <Input
                type={'text'}
                placeholder={'Имя'}
                onChange={onChangeName}
                icon="EditIcon"
                value={name}
                name={'name'}
                error={false}
                ref={inputRef}
                onIconClick={onIconClick}
                errorText={'Ошибка'}
                size={'default'}
                
            />
            <EmailInput
                onChange={onChangeEmail}
                value={valueEmail}
                name={'email'}
                icon="EditIcon"
                extraClass="mt-6"
            />
            <PasswordInput
                onChange={onChangePassword}
                value={valuePassword}
                name={'password'}
                icon="EditIcon"
                extraClass="mt-6"
            />
        </form>
        </div>
    )
}

export default Profile;