import React from "react";
import './Info.css'

function Info(props){
    return(
        <>
        <article className="info-sect">
            <h2 className="route-head">Route Head</h2>
            <p className="desc">Desc</p>
            <p className="duration">Dur</p>
            <p className="stops">Stops</p>
            <p className="price-info">Price</p>
        </article>
        <section className="purchase-sect">
            <button className="pur-btn">Purchase Ticket</button>
            <button className="back-btn">Back</button>
        </section>
        </>
    );
}

export default Info;