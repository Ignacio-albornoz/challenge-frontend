import React, { useEffect, useState } from "react";
import { Machine } from "../machine";
import { useMachines } from "../../hooks/useMachines";

import { URL_API } from "../../environment/api";
//Json vercel problem
import machinesJson from "../../mocks/response.json";


import './styles.css';


function ListOfMachines() {

    const machines = machinesJson
    
    const hasMachines = machines?.length > 0;

   /*  const [ search, setSearch ] = useState('')

    const {machines, getListMachines, getMachines} = useMachines(search)

    const API = URL_API

    
    useEffect(() => {
     
        getListMachines()
   
    }, [API]) */

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