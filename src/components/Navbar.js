import React from "react";
import Logo from "./../money.png";

export default function Navbar() {
    return (
        <nav className="navbar">
            <img className="navbar-logo" src={Logo} alt="Expneses tracker app logo" />
            <h1 className="navbar-title">Expenses tracker</h1>
            <button className="navbar-button-login" >Log in</button>
            <button className="navbar-button-signup">Sign up</button>
        </nav>
    );
}