import React from "react";
import LogoImage from "../../assets/Group 1.png";
import styles from "./Logo.module.css"

const Logo = () => {
    return (
        <div className={styles.logo}>
            <img src={LogoImage} alt="logo" />
        </div>
        
    )
}

export default Logo;