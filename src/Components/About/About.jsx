import React from "react";
import './About.css'
import logo from '../../assets/worriar pixel art.gif'
import profile_pic from '../../assets/profile_pic.png'
const About = () => {
    return(
        <div id="about" className="about">
            <div className="about-title">
                <h1>
                    About  me
                </h1>
                <img src={logo} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_pic} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am a junior BI analyst</p>
                        <p>I have completed 10 + projects</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                        <div className="about-skill"><p>React JS</p><hr style={{width:"20%"}}/></div>
                        <div className="about-skill"><p>Javascript</p><hr style={{width:"20%"}}/></div>
                        <div className="about-skill"><p>Java</p><hr style={{width:"60%"}}/></div>
                        <div className="about-skill"><p>SQL</p><hr style={{width:"60%"}}/></div>
                        <div className="about-skill"><p>Python</p><hr style={{width:"60%"}}/></div>
                        <div className="about-skill"><p>C</p><hr style={{width:"20%"}}/></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>1+</h1>
                    <p>YEAR OF EXPERINECE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>Happy clients</p>
                </div>
            </div>
        </div>
    )
}

export default About;