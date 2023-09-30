import { useState } from 'react'
import { searchMachines, getAllMachines } from '../services/machines'


export function useMachines ({ search }) {
    const [ listMachines, setMachines ] = useState([])
    const [ loading, setLoading ] = useState([])

    const getMachines = async () => {
        try{
            setLoading(true)
            if(search === '' || !search){
                const machines = await getAllMachines;
                setMachines(machines);
            }
    
            if(search !== ''){
                const queryMachines = await searchMachines(search)
                setMachines(queryMachines);
            }
        }
        catch(e){

            throw new Error(e.message)
        }
        finally{

            setLoading(false)
        }
    }

    return { listMachines, loading, getMachines }
}