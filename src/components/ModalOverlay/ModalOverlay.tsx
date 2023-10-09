import React, { Children, FC } from 'react';

import styles from './ModalOverlay.module.css';

type TModalOverlay = {
    onOverlayClick: () => void
}

const ModalOverlay:FC<TModalOverlay> = ({onOverlayClick}) => {
    return (
        <div className={`${styles.overlay}`} onClick={onOverlayClick}>
        </div>
    )
}


export default ModalOverlay;