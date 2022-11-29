import React from 'react';
import styles from"./Banner.module.css"
import banner from "../images/Banner1.jpg"

const Banner = () => {
    return (
        <div className={styles.container}>
            <img src={banner} alt="Banner"/>
            <div className={styles.textContainer}>
                <h1>Vandad</h1>
                <p>I'm <span>React </span>Developer</p>
            </div>
        </div>
    );
};

export default Banner;