import { useCalidad } from "../../hooks/useCalidad"
import { IndicatorCalidadBreakpointColor } from "../validations/breakpoints/IndicatorCalidadBreakpointColor";

export const IndicatorCalidadRender = ({content, description}) => {

    const { calcularPorcentaje } = useCalidad(parseFloat(content));

    const breakpointColor = IndicatorCalidadBreakpointColor(calcularPorcentaje(), description);

    const porcentaje = parseInt(calcularPorcentaje());

    return(
        <>
            <div className={`indicator-container ${breakpointColor}`} >
                <h5 className="indicator-calidad-description indicator-text">
                    Calidad
                </h5>
                <h2 className="indicator-calidad-content indicator-text">
                    {porcentaje} %
                </h2>
            </div>
        </>
    )
}