import { URL_API } from "../environment/api"
import machinesJson from '../mocks/response.json'

export const getAllMachines = async () => {
    const API_URL = URL_API

    try {
        const response = await fetch(API_URL);
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

export const searchMachines = async ( search ) => {

    const API_URL = URL_API
    try {
        
        const response = await fetch(`${API_URL}${search}`);

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