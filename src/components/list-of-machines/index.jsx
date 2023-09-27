import React from "react";
import './styles.css';

import { Machine } from "../machine";


function ListOfMachines() {

    const machines = [1, 2, 3, 4, 5, 6]

    return(
    <>
        <ul className="list_machines-container">
            {machines.map((machine, index) => (
                <Machine key={index}/>
            ))}
        </ul>
    </>

    )
}

export { ListOfMachines };