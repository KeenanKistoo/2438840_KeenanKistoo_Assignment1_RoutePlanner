import React from "react";
import './Routes.css';


function Routes(props){
    const {title, id, price} = props;
    return(
        <>
        <section >
            <article className="route">
                <h2 className="title">{title}</h2>
                <p className="identifier">{'id:' + id}</p>
                <p className="price">{'$' + price}</p>
            </article>
        </section>
        </>
    );
}

export default Routes;