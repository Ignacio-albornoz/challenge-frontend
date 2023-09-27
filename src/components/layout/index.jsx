import React from "react";
import './styles.css';

const URL_LOGO_ACRONEX = "./logo-acronex.png"
const URL_LOGO_UNIMAP = "./unimap_blanco.svg"


function Layout() {


    return(
    <>
        <div className="layout-container">
            <div className="icon-wrap">
                <img src={URL_LOGO_ACRONEX} alt="logo acronex" />
                <img className="icon-unimap" src={URL_LOGO_UNIMAP} alt="unimap logo blanco" />
            </div>
            <div className="layout-search-bar">
                <input className="search-bar-input" type="text" placeholder="Buscar..." />
            </div>

            <div className="login-button-wrap">
                <button>L</button>
            </div>
        </div>
    </>

    )
}

export { Layout };