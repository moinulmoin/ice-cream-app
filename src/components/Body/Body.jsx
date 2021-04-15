import React from 'react';
import IceCreamBuilder from '../../containers/IceCreamBuilder/IceCreamBuilder';
import bodyCss from './Body.module.css';

const Body = () => (
    <div className={bodyCss.mainBody}>
        <IceCreamBuilder />
    </div>
);

export default Body;
