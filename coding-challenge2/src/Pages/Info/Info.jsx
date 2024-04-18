import React from "react";
import './Info.css'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { TicketPurchaseContext } from "../../Context/TicketPurchaseContext";

function Info(props){

    const {id, title, desc, duration, stops, price} = props;
    const {addToCart, removeFromCart, updateCart, ticketPurchase} = useContext(TicketPurchaseContext);

    let idOutput = Number(id.replace("route-", ""));
    let itemCount = ticketPurchase[idOutput];
    
// if (isNaN(idOutput)) {
//     // Handle the case when idOutput is NaN
//     console.error(`Invalid id: ${id}`);
//     return null; // Or handle it differently based on your requirements
// }


    function Test(){
        console.log("testing");
    }
    
    // Ensure itemCount is a valid number or fallback to 0
    if (isNaN(itemCount)) {
        itemCount = 1;
    }

    if(itemCount < 0){
        itemCount =0
    }
    
    return(
        <>
        <article className="info-sect">
            <h2 className="route-head">{title}</h2>
            <p className="desc">{desc}</p>
            <p className="duration">{"Total Duration: " + duration}</p>
            <p className="stops">{"Total Number of Stops: " + stops}</p>
            <p className="price-info">{"Total Price: " + "R" + (price * itemCount)}</p>
        </article>
        <section className="input-sect">
            <button className="change-btn" onClick={() => removeFromCart(id)}>-</button>
            <input className="input" type="text" value={itemCount} onChange={(e) => updateCart(id, Number(e.target.value))}/>
            <button className="change-btn" onClick={() => addToCart(id)}>+</button>
        </section>
        <section className="purchase-sect">
            <Link to={'/'} className="back-btn">Continue Shopping</Link>
            <button className="pur-btn">Go to cart</button>
        </section>
        </>
    );
}

export default Info;
