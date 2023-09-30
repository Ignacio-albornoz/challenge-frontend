import React, { useEffect, useState } from "react";
import './styles.css';

import { Machine } from "../machine";
import { useMachines } from "../../hooks/useMachines";
import { URL_API } from "../../environment/api";


function ListOfMachines() {

    const [ search, setSearch ] = useState('')

    const {machines, getListMachines, getMachines} = useMachines(search)

    const API = URL_API

    const hasMachines = machines?.length > 0;
    
    useEffect(() => {
     
        getListMachines()
   
    }, [API])

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