import React from "react";
import './Info.css'
import { Link } from "react-router-dom";

function Info(props){

    const {id, desc, duration, stops, price} = props;

    function backButton(){
        <Link to={'/'}></Link>
    }
    return(
        <>
        <article className="info-sect">
            <h2 className="route-head">{id}</h2>
            <p className="desc">{desc}</p>
            <p className="duration">{"Total Duration: " + duration}</p>
            <p className="stops">{"Total Number of Stops: " + stops}</p>
            <p className="price-info">{"Total Price: " + "R" + price}</p>
        </article>
        <section className="purchase-sect">
            <button className="pur-btn">Add Ticket/s To Cart</button>
            <Link to={'/'} className="title">Back To Routes</Link>
        </section>
        </>
    );
}

export default Info;