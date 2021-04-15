import React from 'react';
import Items from '../Items/Items';
import Modal from '../Modal/Modal';
import TotalPrice from '../TotalPrice/TotalPrice';
import css from './Builder.module.css';

const Builder = () => (
    <div>
        <div className={css.builder}>
            <h3>Build your own Ice Cream Sundae</h3>

            <Items />

            <TotalPrice />
            <button type="button" className={[css.order, 'rounded'].join(' ')}>
                Add to Cart
            </button>
            <Modal>Children</Modal>
        </div>
    </div>
);

export default Builder;
