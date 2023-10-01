import { useState } from 'react'
import { searchMachines, getAllMachines } from '../services/machines'


export function useMachines (search) {

    const [ listMachines, setMachines ] = useState([])
    const [ loading, setLoading ] = useState([])

    const getListMachines = async () => {
        try{

            setLoading(true)
            const machines = await getAllMachines();
            setMachines(machines);
            
        }
        catch(e){

            throw new Error(e.message)
        }
        finally{

            setLoading(false)
        }
    }

    const getMachines = async () => {
        try{
                const queryMachines = await searchMachines(search)
                setMachines(queryMachines);
        }
        catch(e){

            throw new Error(e.message)
        }
        finally{

            setLoading(false)
        }
    }

    return { machines: listMachines, loading, getMachines, getListMachines }
}