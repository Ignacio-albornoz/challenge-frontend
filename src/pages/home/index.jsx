import React, { useEffect, useContext } from "react";
import { SearchContext } from "../../context/search";
import { ListOfMachines } from "../../components/list-of-machines";
import { useMachines } from "../../hooks/useMachines"

import './styles.css';

import { Loader } from "../../components/loader";

/**Pagina home, renderiza la lista de maquinas, recibe la busqueda del usuario por contexto y renderiza la respuesta de la */

export function Home() {

    const { search } = useContext(SearchContext)

    const { searchMachines, machines} = useMachines(search)

    const hasMachines = machines?.length > 0;
    
    useEffect(() => {
     
        searchMachines();
        const interval = setInterval(() => {
            searchMachines()
        }, 40000);
        
        return () => clearInterval(interval);
   
    }, [search])

   
    return(
    <>
        { 
            hasMachines ? <ListOfMachines machines={ machines } /> : <Loader />
        }
    </>

    )
}

