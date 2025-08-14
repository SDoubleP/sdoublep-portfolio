import React from "react";
import './Contact.css'
import theme_pattern from '../../assets/worriar pixel art.gif'
import mail_icon from '../../assets/email.png'
import location_icon from '../../assets/location.png'
import call_icon from '../../assets/phone.png'

const Contact = () => {
    return (
        <div id="contact" className="contact">
            <div className="contact-title">
                <h1>Get In touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's Talk</h1>
                    <p>I am currently avaliable to take on new projects, so feel free to contact me</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" />
                            <p>spaiphyo1997@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" />
                            <p>123456</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" />
                            <p>Myanmar</p>
                        </div>
                    </div>
                </div>
                {/* <form  className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder="Enter your name" name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder="Enter your email" name="email"/>
                    <label htmlFor="">Write Your Message Here</label>
                    <textarea name="message" rows="8" placeholder="Enter your message"></textarea>
                    <button type="submit" className="contact-submit">Submit Now</button>
                </form> */}
            </div>
        </div>
    )
}

export default Contact;