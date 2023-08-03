import React from 'react';
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

const modalRoot = document.getElementById('react-modals');

function Modal({children, isOpen, onEventCloseInModal}) {

    React.useEffect(() =>{
        const closeByEsc = (evt) => {
            if (evt.key === 'Escape') {
                onEventCloseInModal();
            }
        }
        document.addEventListener('keydown', closeByEsc);
        return () => 
            document.removeEventListener('keydown', closeByEsc);
    }, [isOpen]);

    return ReactDOM.createPortal(
        <div className={`${styles.modalwrapper} ${isOpen && styles.modalwrapper_open}`}>
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

Modal.propTypes = {
    children: PropTypes.element.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onEventCloseInModal:  PropTypes.func.isRequired,
}

export default Modal;
