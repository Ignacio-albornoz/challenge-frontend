import './styles.css';
import { useCalidad } from "../../hooks/useCalidad";
import { calidadBreakPointsColors } from '../../hooks/calidadBreakPointsColors';

function Indicator({ description = 'Taponamiento', content = 0.4}) {

    const { calcularPorcentaje } = useCalidad(parseFloat(content));

    const breakpointColor = calidadBreakPointsColors(calcularPorcentaje(), description)

    return(
    <>
        <div className={`indicator-container ${breakpointColor}`} >
            <h5 className="indicator-description indicator-text">
                {description}
            </h5>
            <h2 className="indicator-content indicator-text">
                {description === 'calidad' ? parseInt(calcularPorcentaje()) : parseInt(calcularPorcentaje())} %
            </h2>
        </div>
    </>

    )
}

export { Indicator };