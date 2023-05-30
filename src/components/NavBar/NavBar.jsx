import React from "react";
import "./NavBar.css";
import Shop from "../Shop/Shop";

const NavBar = () => {
    return (
    <nav className="Navigation">
        <ul className="List-ul">
            <li>
                <h1 style={{ color: "white" }}>Insert-Coin</h1>
            </li>
            <li>
                <a href="www.google.com">HOME</a>
            </li>
            <li>
                <a href="www.google.com">PRODUCTOS</a>
            </li>
            <li>
                <a href="www.google.com">CONTACTO</a>
            </li>
            <li>
            <Shop  
            
            />
            </li>
        </ul>
    </nav>
        );
};

export default NavBar;
