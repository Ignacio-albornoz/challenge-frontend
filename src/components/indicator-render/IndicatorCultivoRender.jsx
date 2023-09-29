export const IndicatorCultivoRender = ({content}) => {

    const titleCultivoTuRender = 'Tipo Cultivo'

    return(
        <>
            <div className="indicator-container breakpoint-default" >
                <h5 className="indicator-description indicator-text">
                    {titleCultivoTuRender}
                </h5>
                <h2 className="indicator-content indicator-text">
                    {content}
                </h2>
            </div>
        </>
    )
}