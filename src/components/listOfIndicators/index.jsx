import React from "react";
import './styles.css';

import { Indicator } from "../indicator";


function ListOfIndicators({ indicators = [1, 2, 3, 4]}) {

    indicators = [
        {
            title: 'Evaporazion',
            content: 4
        },
        {
            title: 'Perdida p. viento',
            content: 0
        },
        {
            title: 'Calidad',
            content: 93
        },
        {
            title: 'Rinde Humedo',
            content: 8414
        },
    ]

    return(
    <>
        <ul className="list_indicators-container">
            {indicators.map((indicator) => (
                <li><Indicator key={indicator} title={indicator.title} content={indicator.content}/></li>
            ))}
        </ul>
    </>

    )
}

export { ListOfIndicators };