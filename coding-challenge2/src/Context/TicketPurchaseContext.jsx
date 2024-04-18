import React from "react";
import { createContext, useState } from "react";
import TravelData from '../json_data/TravelData.json'

export const TicketPurchaseContext = createContext();

function makeDefaultTicket(){
    let tickets = {};
    for (let i =1; i < TravelData.length + 1; i++){
        tickets[i] = 0
        console.log(tickets);
    }
    return tickets;
}

export function TicketPurchaseContextProvider(props){
    const [ticketPurchase, setTicketPurchase] = useState(makeDefaultTicket());

    function addToCart(id){
        setTicketPurchase({...ticketPurchase, [id]: ticketPurchase[id] + 1});
    }

    function removeFromCart(id){
        setTicketPurchase({...ticketPurchase, [id]: ticketPurchase[id] -1});
    }

    function updateCart(id, amount){
        setTicketPurchase({...ticketPurchase, [id]: amount})
    }

    const contextValues = {
        addToCart,
        removeFromCart,
        updateCart,
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

