import React from "react";
import { ListOfIndicators } from "../list-of-indicators";
import { MovementIndicator } from "../movement-indicator/movementIndicator";

import './styles.css';


export function Machine(machine) {
    
    return(
        <li className="machine-container">
            <div className="machine-card">
                <div className="machine-header">
                    <MovementIndicator moving={machine.data.moving}/>
                    <div className="machine-header-text">
                        <h6 className="machine-description machine-text">
                            {`(${machine.data.id}) ${machine.data.description}`}
                        </h6>
                        <h6 className="machine-company machine-text">
                            {machine.data.company}
                        </h6>
                    </div>
                </div>
                <ListOfIndicators indicators={machine.data.indicadores}/>
            </div>
        </li>
    )   
}
