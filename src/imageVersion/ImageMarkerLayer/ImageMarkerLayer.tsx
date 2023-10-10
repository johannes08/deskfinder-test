import React, {useMemo} from "react";
import './imageMarkerLayer.scss'
import deskOne from "../../assets/desk-group-1.jpeg";

interface IImageMarkerLayer {
    desks: Array<{
        id: string;
        name: string;
        short: string;
        position_x: number;
        position_y: number;
    }>
    scale: number
}
const ImageMarkerLayer: React.FunctionComponent<IImageMarkerLayer> = (props) => {
    const { desks, scale } = props;

    const imgHeight = useMemo(() => window.innerHeight / 2, [])

    return (
        <div className="imageMarkerLayer" >
            <img src={deskOne} className="img" alt="Vite logo" style={{ height: imgHeight }} />

            {desks.map(i => (
                <div className="marker" style={{ top: i.position_y + '%', left: i.position_x + '%', transform: `scale(${1 / scale})` }}>
                    {i.short}
                </div>
            ))}

        </div>
    )
}

export default ImageMarkerLayer;
