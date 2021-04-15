import React from 'react';
import css from './Item.module.css';

const Item = () => (
    <li className={css.item}>
        <span>Vanilla</span>
        <span className={css.quantity}>2</span>
        <div className="right">
            <button type="button" className={[css.plus, 'rounded'].join(' ')}>
                +
            </button>
            <button type="button" className={[css.minus, 'rounded'].join(' ')}>
                -
            </button>
        </div>
    </li>
);

export default Item;
