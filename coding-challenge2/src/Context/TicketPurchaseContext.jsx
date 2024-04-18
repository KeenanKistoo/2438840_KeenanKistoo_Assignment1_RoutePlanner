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
    console.log(ticketPurchase);

    function addToCart(id){
        let idOutput = Number(id.replace("route-", ""));
        console.log(idOutput);
        setTicketPurchase({...ticketPurchase, [idOutput]: ticketPurchase[idOutput] + 1});
    }

    function removeFromCart(id){
        let idOutput = Number(id.replace("route-", ""));
        setTicketPurchase({...ticketPurchase, [idOutput]: ticketPurchase[idOutput] -1});
    }

    function updateCart(id, amount){
        let idOutput = Number(id.replace("route-", ""));
        setTicketPurchase({...ticketPurchase, [idOutput]: amount})
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

