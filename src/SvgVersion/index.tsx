import './index.css';

const SvgVersion = () => {
    const handleClick = (e: React.MouseEvent<SVGRectElement, MouseEvent>) => {
        const target = e.target as any;
        console.dir(target)
        alert(`Du hast ${target.id} ausgewählt`)
    }

    return (
        <div>
            <svg id="Ebene_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 381.41 246.45">
                <rect onClick={handleClick} id="Tisch_15" className="cls-2" x="135.64" y="122.3" width="52.7" height="85.14"/>
                <rect onClick={handleClick} id="Tisch_14" className="cls-2" x="197.12" y="122.64" width="52.7" height="85.14"/>
                <rect onClick={handleClick} id="Tisch_12" className="cls-2" x="135.62" y="29.22" width="52.7" height="85.14"/>
                <rect onClick={handleClick} id="Tisch_13" className="cls-2" x="197.11" y="29.56" width="52.7" height="85.14"/>
                <polyline className="cls-1" points=".5 0 .5 245.95 380.91 245.95 380.91 0"/>
                <ellipse className="cls-1" cx="114.35" cy="69.26" rx="12.5" ry="17.91"/>
                <ellipse className="cls-1" cx="114.01" cy="170.27" rx="12.5" ry="17.91"/>
                <ellipse className="cls-1" cx="272.18" cy="66.31" rx="12.5" ry="17.91"/>
                <ellipse className="cls-1" cx="273.53" cy="161.82" rx="12.5" ry="17.91"/>
            </svg>
        </div>
    )

}

export default SvgVersion;