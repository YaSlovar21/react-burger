import styles from './Profile.module.css';

import {
    Button, EmailInput, Input, PasswordInput
} from '@ya.praktikum/react-developer-burger-ui-components';

import React, { FormEvent } from 'react';
import { useDispatch, useSelector } from '../services/hooks';
import { logout, updateUserAction } from '../services/actions/user';
import { useForm } from '../utils/useForm';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../utils/constants';
import ProfileNav from '../components/ProfileNav/ProfileNav';
  

function Profile() {
    const userName = useSelector((store) => store.user.name);
    const userEmail = useSelector((store) => store.user.email);
    //Redux в данном спринте не трогаем
    const dispatch = useDispatch();

    const [isNameDisabled, setIsNameDisabled] = React.useState(true);
    const inputNameRef = React.useRef<HTMLInputElement>(null);
 
    const onIconNameClick = () => {
        setIsNameDisabled(false);
        setTimeout(() => inputNameRef.current?.focus(), 0);
    }

    const form = useForm({name: userName, email: userEmail, password: ''});
    const isDataChanged = userName !== form.values.name || userEmail !== form.values.email || !!form.values.password;

    function handleResetForm() {
        form.setValues({name: userName, email: userEmail, password: ''})
    }

    function handleUpdateUser(evt: FormEvent) {
        evt.preventDefault();
        dispatch(updateUserAction(form.values.name, form.values.email, form.values.password))
        form.setValues({
            ...form.values,
            password: ''
        })
    }



    return (
        <div className={styles.formpagecontent}> 
       
        {/* меню */}
        <ProfileNav />
    
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