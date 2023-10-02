import React from "react";
import './styles.css';

import { Indicator } from "../indicator";

export function ListOfIndicators({indicators}) {
    

    return(
    <>
        <ul className="list_indicators-container">  
            {Object.entries(indicators).map(([key, value]) => (
                <li key={key}>
                    <Indicator description={key} content={value} />
                </li>
            ))}
        </ul>
    </>

    )
}
