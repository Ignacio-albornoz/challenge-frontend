import React, { useEffect, useState } from "react";
import { ListOfMachines } from "../../components/list-of-machines";
import {useMachines} from "../../hooks/useMachines"
import './styles.css';

//Json vercel problem
import machinesJson from "../../mocks/response.json";


export function Home() {

    const machines = machinesJson

    const [ search, setSearch ] = useState('')
    
    const hasMachines = machines?.length > 0;
    
    


   /*  const [ search, setSearch ] = useState('')//Futuro context


    
    const API = URL_API
    
    const { getListMachines, machines} = useMachines(search)
    
    useEffect(() => {
     
        getListMachines()
   
    }, [API]) */

   
    return(
    <>
        {
        hasMachines ?
            <ListOfMachines machines={ machines } /> : <h1>Loading!</h1>
        }
    </>

    )
}

