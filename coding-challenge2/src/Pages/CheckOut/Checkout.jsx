import React, { useState, useEffect, useContext } from "react";
import { TicketPurchaseContext } from "../../Context/TicketPurchaseContext";


function Checkout() {
    const [isLoading, setIsLoading] = useState(true);
    const {completeCheckout ,ticketPurchase} = useContext(TicketPurchaseContext);

    useEffect(() => {
        // Simulate a 2-second loading period
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        // Clear the timeout if the component unmounts before the timeout completes
        return () => clearTimeout(timer);
    }, []); // Empty dependency array to ensure effect runs only once

    return (
        <>
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                <h1 onLoad={() => completeCheckout()}>Checkout Complete</h1>
            )}
        </>
    );
}

export default Checkout;
