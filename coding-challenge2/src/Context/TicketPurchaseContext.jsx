import React from "react";
import { createContext, useState } from "react";
import TravelData from '../json_data/TravelData.json'

export const TicketPurchaseContext = createContext();

function makeDefaultTicket(){
    let tickets = {};
    for (let i =1; i < TravelData.length + 1; i++){
        tickets[i] = 0
    }
    return tickets;
}

export function TicketPurchaseContextProvider(props){
    const [ticketPurchase, setTicketPurchase] = useState(makeDefaultTicket());
    //console.log(ticketPurchase);

    function addToCart(id){
        let idOutput = Number(id.replace("route-", ""));
        setTicketPurchase({...ticketPurchase, [idOutput]: ticketPurchase[idOutput] + 1});
    }

    function removeFromCart(id) {
        let idOutput = Number(id.replace("route-", ""));
        // Check if the current quantity is already zero
        if (ticketPurchase[idOutput] === 0) {
            // If it's zero, do not decrement further
            return;
        }
        // Otherwise, decrement the quantity
        setTicketPurchase({ ...ticketPurchase, [idOutput]: ticketPurchase[idOutput] - 1 });
    }
    function updateCart(id, amount){
        let idOutput = Number(id.replace("route-", ""));
        setTicketPurchase({...ticketPurchase, [idOutput]: amount})
    }
    function getTotalAmount(){
        let total = 0;
        //console.log("ticket-purchase:", ticketPurchase[1])
        for(let ticket in ticketPurchase){
            total = total + (ticketPurchase[ticket] * TravelData[Number(ticket)-1].price);
            console.log("context:" + total);
        }
        return total;
    }
    const contextValues = {
        addToCart,
        removeFromCart,
        updateCart,
        getTotalAmount,
        ticketPurchase,
    };
    return(
    <>
    <TicketPurchaseContext.Provider value={contextValues}>
        {props.children}
    </TicketPurchaseContext.Provider>
    </>
 )   
}

