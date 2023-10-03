import React, { Children, FC } from 'react';
import PropTypes from 'prop-types';

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

/*
ModalOverlay.propTypes = {
    onOverlayClick: PropTypes.func.isRequired,
};*/

export default ModalOverlay;