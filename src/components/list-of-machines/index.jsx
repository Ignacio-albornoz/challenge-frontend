import React, { useEffect, useState } from "react";
import './styles.css';

import { Machine } from "../machine";
import { getAllMachines } from "../../hooks/useMachines";



function ListOfMachines() {

    const { machines } = getAllMachines()
    const hasMachines = machines?.length > 0;

    /* useEffect(() => {
        const [ machines, setMachines ] = useState()
        setMachines(ResultsJson)
        
        fetch(apiUrl)
            .then(res => {

                if(!res.ok){
                    throw new Error('Error fetch')
                }

                return res.json()
                
            }).then(data => {
                setMachines(data);
            })
    }, []) */

    return(
    <>
        {
        hasMachines ?
        <ul className="list_machines-container">
            {
                machines.map((machine) => (
                    <Machine key={machine.id} data={machine}/>
            ))}
        </ul> : <h1>Loading!</h1>
        }
    </>

    )
}

export { ListOfMachines };