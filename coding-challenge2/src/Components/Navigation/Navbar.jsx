import React from "react";
import './Navbar.css'
import { Link } from "react-router-dom";
import { ShoppingCart } from "@phosphor-icons/react";

function Navbar(){
    return(
        <nav className="nav-bar">
            <section className="links">
                <Link to={"/"}>Routes</Link>
                <Link to={"/info"}/*Route information needs to be here */>Information</Link>
                <Link to={"/purchase"}><ShoppingCart size={32}/></Link>
            </section>
        </nav>
    );
}

export default Navbar;