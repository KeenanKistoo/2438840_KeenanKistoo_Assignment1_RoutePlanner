import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { TicketPurchaseContext } from "../../Context/TicketPurchaseContext";
import td from '../../json_data/TravelData.json'
import './Purchase.css'

function Purchase(){
    const {addToCart, removeFromCart, updateCart, getTotalAmount,ticketPurchase} = useContext(TicketPurchaseContext);
    const [totalAmount, setTotalAmount] = useState(0);
    useEffect(() => {
        // Calculate the total amount when the component mounts or when ticketPurchase changes
        const total = getTotalAmount();
        setTotalAmount(total);
        
    }, [ticketPurchase, getTotalAmount]);

    console.log("Total Amount:", totalAmount);
    
    const ticketIDs = Object.keys(ticketPurchase);
    console.log("ticket purchase:", ticketIDs);
    
    return(
        <>
            <h1 className="page-head">Cart</h1>
            {Object.keys(ticketPurchase)
            .filter((ticket) => ticketPurchase[ticket] !== 0) // Filter out keys with a value of 0
            .map((ticket) => (
                // Your JSX code for each ticket goes here
                <div className="ticket" key={ticket}>
                    {/* Example: Render the ID of each ticket */}
                    <h2 className="ticket-head">{td[ticket-1].title}</h2>
                    <p className="route-id">{"route-id: " + td[ticket-1].id}</p>
                    <p className="price-cart">{"Total Price: " + 'R' + (td[ticket-1].price * ticketPurchase[ticket])}</p>
                    <section className="value-sect">
                        <button className="alter-btns">-</button>
                        <input id="input" type="text" />
                        <button id="plus" className="alter-btns">+</button>
                    </section>
                </div>
            ))}

        </>
    );
}

export default Purchase;