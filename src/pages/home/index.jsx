import React, { useEffect, useContext } from "react";
import { SearchContext } from "../../context/search";
import { ListOfMachines } from "../../components/list-of-machines";
import {useMachines} from "../../hooks/useMachines"
import './styles.css';

//Json vercel problem
import machinesJson from "../../mocks/response.json";


export function Home() {

    const { search } = useContext(SearchContext)

    const { searchMachines, machines, loading} = useMachines(search)

    const hasMachines = machines?.length > 0;
    
    useEffect(() => {
     
        searchMachines()
   
    }, [search])

   
    return(
    <>
        { 
            hasMachines ? <ListOfMachines machines={ machines } /> : <h1>Lista vacia!</h1>
        }
    </>

    )
}

