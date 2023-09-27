import React from "react";
import './styles.css';
import { ListOfIndicators } from "../list-of-machine";


function Machine(machineDetails) {

    machineDetails = {
        id: 12,
        description: "Pulverizadora Demo",
        working: true,
        moving: true,
        type: "Pulverizadora",
        company: "Acronex",
        chassis: 33445,
        indicadores: [
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
        ],
    }

    const { id, description, company, indicadores } = machineDetails;

    const indicators = [
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
        <div className="machine-container">
            <div className="machine-header">
                <div className="machine-icon-state"></div>
                <div className="machine-header-text">
                    <h6 className="machine-title machine-text">
                        {`(${id}) ${description}`}
                    </h6>
                    <h6 className="machine-company machine-text">
                        {company}
                    </h6>
                </div>
            </div>
            <ListOfIndicators indicators={indicadores}/>
        </div>
    </>

    )
}

export { Machine };