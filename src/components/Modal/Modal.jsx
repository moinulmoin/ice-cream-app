import React from 'react';
import css from './Modal.module.css';

const Modal = ({ children }) => (
    <div>
        <div className={css.backdrop} />
        <div className={css.modalBody}>{children}</div>
    </div>
);

export default Modal;
