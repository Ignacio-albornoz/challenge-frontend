import React, { useContext } from "react";
import { Link, useNavigate} from "react-router-dom";
import { SearchContext } from "../../context/search";
import { useMachines } from "../../hooks/useMachines";

import './styles.css';

import URL_LOGO_ACRONEX from "../../assets/logo-acronex.png"
import URL_LOGO_UNIMAP from "../../assets/unimap_blanco.svg"
import URL_LOGO_SEARCH from "../../assets/search.png"
import URL_LOGO_LOGIN from "../../assets/user.png"


function Layout() {

    const navigate = useNavigate()

    const { search, setSearch } = useContext(SearchContext)

    const {machines, searchMachines, searchMachineById} = useMachines(search)

    const handleSubmit = (event) => {
        event.preventDefault();

        if(search.match(/^\d+$/)){
            navigate(`/machine/${search}`)
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
                <Link to={"/"}>
                    <img src={URL_LOGO_ACRONEX} alt="logo acronex" />
                    <img className="icon-unimap" src={URL_LOGO_UNIMAP} alt="unimap logo blanco" />
                </Link>
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