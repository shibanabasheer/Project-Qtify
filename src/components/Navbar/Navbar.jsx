import React from 'react';
import styles from './Navbar.module.css';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import Search from '../Search/Search';

const Navbar = ({data}) => {
    return(
        <nav className={styles.navbar}>
            <Logo />
            <Search placeholder="Search an album"/>
            <Button text="Feedback"/>
        </nav>
    )
}

export default Navbar;