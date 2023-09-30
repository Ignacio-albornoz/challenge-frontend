import './styles.css';

export function MovementIndicator({moving}) {

    const isMoving = moving ? 'machine-stopped' : 'machine-moving';

    return(
        <div className={`machine-icon-state ${isMoving}`}></div>
    )
}