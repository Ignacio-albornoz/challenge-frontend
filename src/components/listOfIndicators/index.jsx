import React from "react";
import { Indicator } from "../indicator";


function ListOfIndicators({ indicators = [1, 2, 3, 4]}) {

    return(
    <>
        <ul className="list_indicators-container">
            {indicators.map((indicator) => (
                <li><Indicator key={indicator}/></li>
            ))}
        </ul>
    </>

    )
}

export { ListOfIndicators };