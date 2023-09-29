import { useState } from 'react';

export function usePulverizadoraIndicator(valor) {
  const [value, setValue] = useState(parseFloat(valor));

  const calcularPorcentaje = () => {
    const porcentaje = (value) * 100;
    return porcentaje;
  };

  return {
    value,
    setValue,
    calcularPorcentaje,
  };
}