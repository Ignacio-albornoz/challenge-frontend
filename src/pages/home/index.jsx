import React, { useEffect, useContext } from "react";
import { SearchContext } from "../../context/search";
import { ListOfMachines } from "../../components/list-of-machines";
import { useMachines } from "../../hooks/useMachines"


import './styles.css';

//Json vercel problem
import machinesJson from "../../mocks/response.json";
import { Loader } from "../../components/loader";


export function Home() {

    const { search } = useContext(SearchContext)

    const { searchMachines, machines, loading} = useMachines(search)

    const hasMachines = machines?.length > 0;
    
    useEffect(() => {
     
        searchMachines()
        /* const interval = setInterval(() => {
            searchMachines()
        }, 40000);
        
        return () => clearInterval(interval); */
   
    }, [search])

   
    return(
    <>
        { 
            hasMachines ? <ListOfMachines machines={ machines } /> : <Loader />
        }
    </>

    )
}

