import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { getMachines, getAllMachines, getMachineById } from '../services/machines'
import toast from "react-hot-toast"



export function useMachines (search) {

    const [ listMachines, setMachines ] = useState([])
    const [ machine, setMachine ] = useState(false)
    const [ loading, setLoading ] = useState(false)

    const navigate = useNavigate()


    const getListMachines = async () => {
        try{

            setLoading(true)
            const machines = await getAllMachines();
            setMachines(machines);
            
        }
        catch(e){

            toast.error(e.message)

        }
        finally{

            setLoading(false)
        }
    }

    const searchMachines = async () => {
        try{
            setLoading(true)
            const query = search;
        
            if(!query.match(/^\d+$/)){
                const queryMachines = await getMachines(query)

                setMachines(queryMachines);
            }

        }
        catch(e){

            toast.error(e.message)

        }
        finally{

            setLoading(false)

        }
    }

    const searchMachineById = async () => {
        try{
            setLoading(true)
            const machine = await getMachineById(search)

            setMachine(machine);

            
            if(machine === null){
                navigate("/home")
            }


        }
        catch(e){
            
            toast.error(e.message)
            
        }
        finally{
            setLoading(false)
        }

    }

    return { machine,   machines: listMachines, loading, searchMachines, getListMachines, searchMachineById }
}