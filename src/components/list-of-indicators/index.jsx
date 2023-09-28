import React from "react";
import './styles.css';

import { Indicator } from "../indicator";


function ListOfIndicators({ indicators}) {

    return(
    <>
        <ul className="list_indicators-container">
            {indicators.map((indicator, index) => (
                <li key={index}>
                    <Indicator description={indicator.description} content={indicator.content}/>
                </li>
            ))}
        </ul>
    </>

    )
}

export { ListOfIndicators };