import React, { useRef, useState } from "react";
import './Navbar.css'
import logo from '../../assets/SDoublePlogo.png'
import underline from '../../assets/fire pixel art.gif'
import menu_open from '../../assets/menu.png'
import menu_close from '../../assets/cross.png'

const Navbar = () => {
    const[menu,setMenu] = useState("home");

    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right = "0";
    }

    const closeMenu = () => {
        menuRef.current.style.right = "-350px";
    }

    return (
        <div className="navbar">
           <img className="logo" src={logo} alt="" />
           <img className="toggle-icon" src={menu_open} onClick={openMenu} alt="" />
           <ul ref={menuRef} className="nav-menu">
            <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
            <li><a href="#home" className="anchor-link"><p onClick={()=>setMenu("home")}>Home</p></a>{menu === "home" ? <img src={underline} alt="" />:<></>}</li>
            <li><a href="#about" className="anchor-link"><p onClick={()=>setMenu("about")}>About Me</p></a>{menu === "about" ? <img src={underline} alt="" /> : <></>}</li>
            <li><a href="#services" className="anchor-link"><p onClick={()=>setMenu("services")}>Services</p></a>{menu === "services" ? <img src={underline} alt="" />:<></>}</li>
            <li><a href="#work" className="anchor-link"><p onClick={()=>setMenu("work")}>Portfolio</p></a>{menu === "work" ? <img src={underline} alt="" />:<></>}</li>
            <li><a href="#contact" className="anchor-link"><p onClick={()=>setMenu("contact")}>Contact</p></a>{menu === "contact" ? <img src={underline} alt="" />:<></>}</li>
           </ul>
           <div className="nav-connect"><a href="#contact" className="anchor-link">Connect With Me</a></div>
        </div>
    )
}

export default Navbar;