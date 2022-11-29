import React from 'react';
import styles from "./navbar.module.css"
import Logo from "../images/logo.png"

const Navbar = () => {
    return (
        <header className={styles.header}>
            <div className={styles.listContainer}>
                <ul className={styles.list}>
                    <li>HomePage</li>
                    <li>Products</li>
                    <li>Team</li>
                    <li>Blog</li>
                    <li>About Us</li>
                </ul>
            </div>
            <div className={styles.Logo}>
                <img className={styles.Logo} src={Logo} alt="Logo" />
            </div>
        </header>
    );
};

export default Navbar;