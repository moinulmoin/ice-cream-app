import React from 'react';
import css from './Scoop.module.css';

const scoop = () => <div className={[css.scoop, css.chocolate].join(' ')} />;

export default scoop;
