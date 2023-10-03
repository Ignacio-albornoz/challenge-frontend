import { useState } from 'react';

export function usePulverizadoraIndicator(valor) {
  const [value, setValue] = useState(0);

  const calcularPorcentaje = () => {
    const porcentaje = (valor) * 100;
    return porcentaje;
  };

  return {
    value,
    setValue,
    calcularPorcentaje,
  };
}
