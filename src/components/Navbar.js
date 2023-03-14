import React from "react"
import logo from '../images/neolink-logo.png';

export default function Navbar() {
    return (
        <nav>
            <img src={logo} className="nav--icon" alt="logo"/>
            <h2 className="nav--logo_text">NeoLink</h2>
            <h3 className="nav--item"> <a style={{textDecoration: 'none', color: 'white'}} href="/neonatal-care">Neonatal Care</a></h3>
            <h3 className="nav--item"> <a style={{textDecoration: 'none', color: 'white'}} href="/volunteer">Become a volunteer</a></h3>
            <h3 className="nav--item">About Us</h3>
        </nav>
    )
}
