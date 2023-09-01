import styles from './Profile.module.css';

import {
    Button, EmailInput, Input, PasswordInput
} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout, updateUserAction } from '../services/actions/user';
import { useForm } from '../utils/useForm';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../utils/constants';
  

function Profile() {
    const userName = useSelector(store => store.user.name);
    const userEmail = useSelector(store => store.user.email);
    const dispatch = useDispatch();

    const [isNameDisabled, setIsNameDisabled] = React.useState(true);
    const inputNameRef = React.useRef(null);
 
    const onIconNameClick = () => {
        setIsNameDisabled(false);
        setTimeout(() => inputNameRef.current.focus(), 0);
    }

    const form = useForm({name: userName, email: userEmail, password: ''});
    const isDataChanged = userName !== form.values.name || userEmail !== form.values.email || !!form.values.password;

    function handleResetForm() {
        form.setValues({name: userName, email: userEmail, password: ''})
    }

    function handleUpdateUser(evt) {
        evt.preventDefault();
        dispatch(updateUserAction(form.values.name, form.values.email, form.values.password))
        form.setValues({
            ...form.values,
            password: ''
        })
    }

    function handleLogout() {
        dispatch(logout());
    }

    return (
        <div className={styles.formpagecontent}> 
        <div className={`mr-15 ${styles.formpagecontent__menu}`}>
        <ul className={styles.navlist}>
            <li className={styles.navlist__item}><NavLink to={ROUTES.profile} className={({isActive}) => `text text_type_main-medium ${styles.navlink} ${isActive && styles.active}`}>Профиль</NavLink></li>
            <li className={styles.navlist__item}><NavLink to='/test' className={({isActive}) => `text text_type_main-medium ${styles.navlink} ${isActive && styles.active}`}>История заказов</NavLink></li>
            <li className={`text text_type_main-medium text_color_inactive ${styles.navlist__item} ${styles.logout}`} onClick={handleLogout}>Выход</li>
        </ul>
        <p className="text text_type_main-default text_color_inactive mt-20">В этом разделе вы можете изменить свои персональные данные</p>
        </div>
        <form className={styles.form} onSubmit={handleUpdateUser}>
            <Input
                type={'text'}
                placeholder={'Имя'}
                onChange={form.handleInputChange}
                icon="EditIcon"
                value={form.values.name}
                name={'name'}
                error={false}
                ref={inputNameRef}
                onIconClick={onIconNameClick}
                errorText={'Ошибка'}
                size={'default'}
                disabled={isNameDisabled}
                onBlur={() => setIsNameDisabled(true)}
            />
            <EmailInput
                onChange={form.handleInputChange}
                value={form.values.email}
                name={'email'}
                icon="EditIcon"
                extraClass="mt-6"
                placeholder="E-mail"
                isIcon={true}
            />
            <PasswordInput
                onChange={form.handleInputChange}
                value={form.values.password}
                name={'password'}
                icon="EditIcon"
                extraClass="mt-6"
            />
            { isDataChanged && (<><Button htmlType="button" type="secondary" size="small" extraClass="mt-4" onClick={handleResetForm}>Отмена</Button>
            <Button htmlType="submit" type="primary" size="small" extraClass="mt-4">Сохранить</Button></>)}
        </form>
        </div>
    )
}

export default Profile;