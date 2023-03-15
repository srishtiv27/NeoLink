import React from "react"
import logo from '../images/neolink-logo.png';

export default function Navbar() {
    return (
        <nav>
            <a style={{textDecoration: 'none', color: 'white'}} href="/"><img src={logo} className="nav--icon" alt="logo" href="/"/></a>
            <h2 className="nav--logo_text"><a style={{textDecoration: 'none', color: 'white'}} href="/">NeoLink</a></h2>
            <h3 className="nav--item"> <a style={{textDecoration: 'none', color: 'white'}} href="/neonatal-care">Neonatal Care</a></h3>
            <h3 className="nav--item"> <a style={{textDecoration: 'none', color: 'white'}} href="/volunteer">Become a volunteer</a></h3>
            <h3 className="nav--item">About Us</h3>
            <h3 className="nav--item"> <a style={{textDecoration: 'none', color: 'white'}} href="/login-register">Login/Register</a></h3>
        </nav>
    )
}
