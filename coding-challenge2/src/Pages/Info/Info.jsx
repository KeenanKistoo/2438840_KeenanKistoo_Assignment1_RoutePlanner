import React from "react";
import './Info.css'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { TicketPurchaseContext } from "../../Context/TicketPurchaseContext";

function Info(props){

    const {id, desc, duration, stops, price} = props;
    const {addToCart, removeFromCart, updateCart, ticketPurchase} = useContext(TicketPurchaseContext);

    let itemCount = ticketPurchase[id];
    return(
        <>
        <article className="info-sect">
            <h2 className="route-head">{id}</h2>
            <p className="desc">{desc}</p>
            <p className="duration">{"Total Duration: " + duration}</p>
            <p className="stops">{"Total Number of Stops: " + stops}</p>
            <p className="price-info">{"Total Price: " + "R" + price}</p>
        </article>
        <section className="input-sect">
            <button className="change-btn"
            onClick={() => removeFromCart(id)}>-</button>
            <input 
                className="input" 
                type="text" 
                value={itemCount} />
            <button className="change-btn"
            onClick={() => addToCart(id)}>+</button>
        </section>
        <section className="purchase-sect">
            <Link to={'/'} className="back-btn">Back To Routes</Link>
            <button className="pur-btn">Add Ticket/s To Cart</button>
        </section>
        </>
    );
}

export default Info;