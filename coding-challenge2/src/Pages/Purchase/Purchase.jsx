import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
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
        {Object.values(ticketPurchase).some(amount => amount > 0) ? ( // Check if any value is greater than 0
            <>
                {Object.keys(ticketPurchase)
                .filter((ticket) => ticketPurchase[ticket] !== 0) // Filter out keys with a value of 0
                .map((ticket) => (
                    <div className="ticket" key={ticket}>
                        {/* Your JSX code for each ticket goes here */}
                        <h2 className="ticket-head">{td[ticket-1].title}</h2>
                        <p className="route-id">{"route-id: " + td[ticket-1].id}</p>
                        <p className="price-cart">{"Total Price: " + 'R' + (td[ticket-1].price * ticketPurchase[ticket])}</p>
                        <section className="value-sect">
                            <button className="alter-btns" onClick={() => removeFromCart(ticket)}>-</button>
                            <input id="input" type="text" value={ticketPurchase[ticket]} onChange={(e) => updateCart(ticket, e.target.value)} />
                            <button id="plus" className="alter-btns" onClick={() => addToCart(ticket)}>+</button>
                        </section>
                    </div>
                ))}
                <p className="subtotal">Subtotal: {'R' + Object.keys(ticketPurchase)
                .filter((ticket) => ticketPurchase[ticket] !== 0)
                .map((ticket) => td[Number(ticket) - 1].price * ticketPurchase[ticket])
                .reduce((total, price) => total + price, 0)}</p>
                <Link className='checkout' to='/checkout'>Checkout</Link>
            </>
        ) : (
            <p className="no-items">No items in cart</p>
        )}
    </>

    );
}

export default Purchase;