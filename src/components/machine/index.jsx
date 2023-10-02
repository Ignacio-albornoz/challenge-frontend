import React from "react";
import { Link } from 'react-router-dom'
import { ListOfIndicators } from "../list-of-indicators";
import { MovementIndicator } from "../movement-indicator/movementIndicator";

import './styles.css';


export function Machine(machine) {
    
    return(
        <li className="machine-card-container">
            <Link to={`/machine/${machine.data.id}`}>
                <div className="machine-card">
                    <div className="machine-header">
                        <MovementIndicator moving={machine.data.moving}/>
                        <div className="machine-header-text">
                            <h4 className="machine-description machine-text">
                                {`(${machine.data.id}) ${machine.data.description}`}
                            </h4>
                            <h6 className="machine-company machine-text">
                                {machine.data.company}
                            </h6>
                        </div>
                    </div>
                    <ListOfIndicators indicators={machine.data.indicadores}/>
                </div>
            </Link>
        </li>
    )   
}
