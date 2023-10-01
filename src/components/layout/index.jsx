import React, { useContext } from "react";
import { SearchContext } from "../../context/search";
import { useMachines } from "../../hooks/useMachines";
import './styles.css';

const URL_LOGO_ACRONEX = "./logo-acronex.png"
const URL_LOGO_UNIMAP = "./unimap_blanco.svg"
const URL_LOGO_SEARCH = "./search.png"
const URL_LOGO_LOGIN = "./user.png"


function Layout() {

    const { search, setSearch } = useContext(SearchContext)

    const {machines, searchMachines, searchMachineById} = useMachines(search)

    const handleSubmit = (event) => {
        event.preventDefault();

        if(search.match(/^\d+$/)){
            searchMachineById(search)
        }

    }

    const handleChange = (event) => {
        const query = event.target.value;
        setSearch(query);
    }

    return(
    <>
        <div className="layout-container">
            <div className="icon-wrap">
                <img src={URL_LOGO_ACRONEX} alt="logo acronex" />
                <img className="icon-unimap" src={URL_LOGO_UNIMAP} alt="unimap logo blanco" />
            </div>
            <form onSubmit={handleSubmit} className="form-search-bar" >
                <input 
                    name="query"
                    value={search}
                    onChange={handleChange} 
                    className="search-bar-input" 
                    type="text" 
                    placeholder="Buscar..." 
                />
                <button type="submit" className="search-bar-button" >
                    <img className="search-bar-icon"src={URL_LOGO_SEARCH} alt="logo de busqueda, para el input barra de busqueda" />
                </button>
            </form>

            <div className="login-button-wrap">
                <button className="login-button">
                    <img className="login-icon" src={URL_LOGO_LOGIN} alt="logo de usuario, para iniciar sesion" />
                </button>
            </div>
        </div>
    </>

    )
}

export { Layout };