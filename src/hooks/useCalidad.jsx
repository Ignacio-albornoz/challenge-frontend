import { useState } from 'react';

//TODO no se muestra el porcentaje correcto

export function useCalidad(valor) {
  const [calidad, setCalidad] = useState(parseFloat(valor));

  const calcularPorcentaje = () => {
    let porcentaje;
    
    if (calidad === 0.00) {
      porcentaje = 100;
      setCalidad(porcentaje)
      return porcentaje;
    } 
    
    if (calidad === 1.00) {
      porcentaje = 0;
      setCalidad(porcentaje)
      return porcentaje;
    } 
    
    if(calidad >= 0.01 && calidad < 0.99){

      porcentaje = parseFloat(1.00 - parseFloat(valor)) * 100;
      setCalidad(porcentaje)
      return porcentaje;
    }

    return calidad;
  };

  return {
    calidad,
    setCalidad,
    calcularPorcentaje,
  };
}
