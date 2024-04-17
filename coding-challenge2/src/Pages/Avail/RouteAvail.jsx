import React from "react";
import TravelData from '../../json_data/TravelData.json'
import Routes from "./Routes";
import './RouteAvail.css'

function RouteAvail(){
    return(
        <>
        <section>
                <h1 className="main-head">Public Transit Route Planner</h1>
        </section>
        <section id="routes">
        {TravelData.map((td) => (
            <Routes 
            title={td.title} 
            id={td.id}
            price={td.price}/>
        ))}
        </section>
        </>
    );
}

export default RouteAvail;