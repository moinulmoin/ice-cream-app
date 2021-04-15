import React from 'react';
import Scoop from '../Scoop/Scoop';
import css from './IceCream.module.css';

const IceCream = () => (
    <div>
        <div className={css.icecream}>
            <p className={css.cone} />
            {/* <!-- add scoops</p> --> */}
            <Scoop />
            <div className={css.cherry} />
        </div>
    </div>
);

export default IceCream;
