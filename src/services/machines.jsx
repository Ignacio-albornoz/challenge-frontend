import { URL_API } from "../environment/api"

export const getAllMachines = async () => {
    try {
        const response = await fetch(URL_API);
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

export const searchMachines = async ({ search }) => {
    if(search === '') return null

    try {
        const response = await fetch(URL_API+search);
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