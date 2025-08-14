import React from "react";
import './Footer.css'
import footer_logo from '../../assets/worriar pixel art.gif'
import user_icon from '../../assets/SDoublePlogo.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={footer_logo} alt="" />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus unde, repellendus labore aperiam dolore et fugit enim, mollitia veniam iusto, voluptates vel laudantium. Nobis impedit dolor, deserunt suscipit molestias pariatur?</p>
                </div>
                {/* <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder="Enter your Email" />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div> */}
            </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, excepturi, expedita tempore, aliquid est placeat quas non consequuntur nulla recusandae accusantium laboriosam adipisci libero minus quia. Natus, delectus explicabo. Quisquam.</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with Me</p>
            </div>
        </div>
        </div>
    )
}

export default Footer;