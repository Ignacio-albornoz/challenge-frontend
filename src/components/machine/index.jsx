import React from "react";
import { ListOfIndicators } from "../list-of-indicators";
import { MovementIndicator } from "../movement-indicator/movementIndicator";

import './styles.css';


function Machine(machineDetails) {

    machineDetails = {
        id: 12,
        description: "Pulverizadora Demo",
        working: true,
        moving: false,
        type: "Pulverizadora",
        company: "Acronex",
        chassis: 33445,
        indicadores: [
            {
                description: 'evaporacion',
                content: 0.02,
            },
            {
                description: undefined,
                content: 'Soja'
            },
            {
                description: 'rinde_humedo',
                content: 7000,
            },
            {
                description: 'calidad',
                content: 0.4,
            },
        ],
    }
    
    const { id, description, company, moving, indicadores } = machineDetails;
    
    
    return(
    <li className="machine-container">
        <div className="machine-card">
            <div className="machine-header">
                <MovementIndicator moving={moving}/>
                 <div className="machine-header-text">
                    <h6 className="machine-description machine-text">
                        {`(${id}) ${description}`}
                    </h6>
                    <h6 className="machine-company machine-text">
                        {company}
                    </h6>
                </div>
            </div>
            <ListOfIndicators indicators={indicadores}/>
        </div>
    </li>

    )
}

export { Machine };