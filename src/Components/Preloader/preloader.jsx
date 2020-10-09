import React from 'react';
import Styles from './preloader.module.css';

const Preloader = () => {
    return (
        <div className={Styles.preloader__wrapper}>
            <span className={Styles.preloader} />
        </div>
    );
};

export default Preloader;
