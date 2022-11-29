import React from 'react';
import styles from './footer.module.css'

const Footer = () => {
    return (
        <div className={styles.container}>
            <p>
                &copy; All rights reserved 2022
            </p>
        </div>
    );
};

export default Footer;