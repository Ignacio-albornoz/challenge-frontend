import React, { createContext, useState } from "react"


/**Contexto Search, es donde se guarda y consulta las busqueda del usuario */

export const SearchContext = createContext()

export function SearchProvider ({ children }){
    const [ search, setSearch ] = useState('')
    return(
    <SearchContext.Provider value={{
        search, setSearch
    }}>
        {children}
    </SearchContext.Provider>
    )
}