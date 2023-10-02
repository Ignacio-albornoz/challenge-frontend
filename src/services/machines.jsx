import { URL_API, URL_API_QUERY } from "../environment/api"
import machinesJson from '../mocks/response.json'

export const getAllMachines = async () => {

    try {
        const response = await fetch(URL_API_QUERY);
        const machines = await response.json();

        return machines?.map( machine => ({
            id: machine.id,
            description: machine.description,
            working: machine.working,
            moving: machine.moving,
            type: machine.type,
            company: machine.company,
            chassis: machine.chassis,
            indicadores: machine.indicadores,
        }))

    }
    catch (e){
        throw new Error('')
    }
}

export const getMachines = async ( search ) => {

    try {
        
        const response = await fetch(`${URL_API_QUERY}${search}`);

        const machines = await response.json();

        if(machines.length > 0){

        
            return machines?.map( machine => ({
                id: machine.id,
                description: machine.description,
                working: machine.working,
                moving: machine.moving,
                type: machine.type,
                company: machine.company,
                chassis: machine.chassis,
                indicadores: machine.indicadores,
            }))

        }

        return;

        /* const filterMachines = await machinesJson.filter( items => {
            return(
                items.description.toLowerCase().includes(search.toLowerCase())
            )
        })

        return {filterMachines} */
    }
    catch (e){
        throw new Error(e.message)
    }

}

export const getMachineById = async ( search ) => {

    try {
        /*

        const filterMachines = machinesJson.filter( items => items.id == search)

        console.log(filterMachines);

        return {filterMachines} */
        
        const response = await fetch(`${URL_API}/${search}`);

        const machine = await response.json();

        return machine;

    }
    catch (e){
        throw new Error(e.message)
    }
}