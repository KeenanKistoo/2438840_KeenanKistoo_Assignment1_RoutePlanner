import React from "react";
import './Navbar.css'
import { Link } from "react-router-dom";
import { ShoppingCart } from "@phosphor-icons/react";

function Navbar(){
    return(
        <nav className="nav-bar">
            <section className="links">
                <Link to={"/"}>Routes</Link> {/**Link to the homepage */}
                <Link to={"/cart"}><ShoppingCart size={32}/></Link> {/**Link to the cart */}
            </section>
        </nav>
    );
}

export default Navbar;