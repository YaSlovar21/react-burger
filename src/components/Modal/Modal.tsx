import React, { FC, ReactElement } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom'

import styles from './Modal.module.css';


import {
    CloseIcon
} from "@ya.praktikum/react-developer-burger-ui-components";

import { ESC_CODE } from '../../utils/constants';

import OrderDetails from '../OrderDetails/OrderDetails';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import ModalOverlay from '../ModalOverlay/ModalOverlay';

const modalRoot = document.getElementById('react-modals') as HTMLDivElement;

type TModalProps = {
    children: ReactElement,
    onEventCloseInModal: () => void 
}

const Modal:FC<TModalProps> = ({children, onEventCloseInModal}) => {

    React.useEffect(() =>{
        const closeByEsc = (evt: KeyboardEvent) => {
            if (evt.key === ESC_CODE) {
                onEventCloseInModal();
            }
        }
        document.addEventListener('keydown', closeByEsc);
        return () => 
            document.removeEventListener('keydown', closeByEsc);
    }, []);

    return ReactDOM.createPortal(
        <div className={`${styles.modalwrapper}`}>
            <ModalOverlay onOverlayClick={onEventCloseInModal}  />
            <div className={styles.modal}>
                <button className={styles.closebutton} onClick={onEventCloseInModal}>
                    <CloseIcon type="primary" />
                </button>
                {children}
            </div>
        </div>
        , modalRoot
    )
}
/*
Modal.propTypes = {
    children: PropTypes.element.isRequired,
    onEventCloseInModal:  PropTypes.func.isRequired,
}*/

export default Modal;