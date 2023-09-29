import React, { useEffect, useState } from "react";
import './styles.css';

import { Machine } from "../machine";
import { URL_API } from "../../environment/api";


function ListOfMachines() {
    const apiUrl = URL_API;
    
    const [ machines, setMachines ] = useState()
    const hasMachines = machines?.length > 0;

    useEffect(() => {

        fetch(apiUrl)
            .then(res => {

                if(!res.ok){
                    throw new Error('Error fetch')
                }

                return res.json()
                
            }).then(data => {
                setMachines(data);
            })
    }, [])

    return(
    <>
        {
        hasMachines ?
        <ul className="list_machines-container">
            {machines.map((machine, index) => (
                <Machine key={index} data={machine}/>
            ))}
        </ul> : <h1>Loading!</h1>
        }
    </>

    )
}

export { ListOfMachines };