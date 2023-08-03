import React, { Children } from 'react';
import PropTypes from 'prop-types';

import styles from './ModalOverlay.module.css';


function ModalOverlay({onOverlayClick}) {
    return (
        <div className={`${styles.overlay}`} onClick={onOverlayClick}>
        </div>
    )
}


ModalOverlay.propTypes = {
    onOverlayClick: PropTypes.func.isRequired,
};

export default ModalOverlay;