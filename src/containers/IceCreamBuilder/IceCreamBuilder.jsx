import React, { Component } from 'react';
import Builder from '../../components/Builder/Builder';
import IceCream from '../../components/IceCream/IceCream';
import css from './IceCreamBuilder.module.css';

export default class IceCreamBuilder extends Component {
    state = {};

    render() {
        return (
            <div className={['container', css.container].join(' ')}>
                <IceCream />
                <Builder />
            </div>
        );
    }
}
