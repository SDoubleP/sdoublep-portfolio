import React from "react";
import './Hero.css'
import profile_pic from '../../assets/profile_pic.png'

const Hero = () => {
    return(
        <div id="home" className="hero">
            <img src={profile_pic} alt="" />
            <h1><span>Hello ! I am Su Paing Phyo,</span> junior business intelligence analyst based in Myanmar</h1>
            <p>I am currently working as a junior BI analyst.</p>
            <div className="hero-action">
                <div className="hero-connect">
                    <a href="#contact" className="anchor-link">Connect With Me</a>
                </div>
                <div className="hero-resume">
                    My Resume
                </div>
            </div>
        </div>
    )
}

export default Hero;