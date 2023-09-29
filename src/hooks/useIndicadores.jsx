import { useState } from 'react';

export function useIndicadores(valor) {
    const [ind, setIndicadores] = useState(valor)

    const objectToArray = () => {

        const indicadores = [];
        Object.entries(ind).map(([key, value]) => {
            indicadores.push({ descripcion: key, content: value })
        })

        setIndicadores(indicadores);

        return ind
    }

    //Se transforma el objeto Indicadores en un array, para poder mapearlo

  return {
    ind,
    objectToArray,
  };
}
