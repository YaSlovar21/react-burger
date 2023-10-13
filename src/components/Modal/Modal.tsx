import React, { FC, PropsWithChildren, ReactElement } from 'react';
import ReactDOM from 'react-dom'

import styles from './Modal.module.css';


import {
    CloseIcon
} from "@ya.praktikum/react-developer-burger-ui-components";

import { ESC_CODE } from '../../utils/constants';

import ModalOverlay from '../ModalOverlay/ModalOverlay';

const modalRoot = document.getElementById('react-modals') as HTMLDivElement;

type TModalProps = {
    onEventCloseInModal: () => void 
}

const Modal:FC<PropsWithChildren<TModalProps>> = ({children, onEventCloseInModal}) => {

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
        <div className={`${styles.modalwrapper}`} data-cy="modal-all" >
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

export default Modal;
