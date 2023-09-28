import { useState } from 'react';

export function useCalidad(valor) {
  const [calidad, setCalidad] = useState(parseFloat(valor));

  const calcularPorcentaje = () => {
    let porcentaje;

    
    if (calidad === 0.00) {
      porcentaje = 100;
      return porcentaje;
    } 
    
    if (calidad === 1) {
      porcentaje = 0;
      return porcentaje;
    } 
    
    if(calidad >= 0.1 && calidad < 0.9){

      porcentaje = (1 - valor) * 100;
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
