import React from "react";
import HeroImage from "../../assets/vibrating-headphone 1.png"
import styles from "./Hero.module.css"

const Hero = () => {
    return(
        <div className={styles.hero}>
            <div>
                <h1>Stream 100,000 songs without interruptions</h1>
                <h1>dive into thousands of podcast episodes</h1>
            </div>
            <div>
                <img src={HeroImage} alt="Headphone" width={212}/>
            </div>
        </div>
    )
}

export default Hero;