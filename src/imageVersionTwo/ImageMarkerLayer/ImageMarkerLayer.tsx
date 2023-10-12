import React, {useMemo} from "react";
import './imageMarkerLayer.scss'

interface IImageMarkerLayer {
    desks: Array<{
        id: string;
        name: string;
        short: string;
        position_x: number;
        position_y: number;
    }>
    scale: number
    image: string
}
const ImageMarkerLayer: React.FunctionComponent<IImageMarkerLayer> = (props) => {
    const { desks, scale, image } = props;

    const imgHeight = useMemo(() => window.innerHeight * .6, [])

    return (
        <div className="imageMarkerLayer" >
            <img src={image} className="img" alt="Vite logo" style={{ height: imgHeight }} />

            {desks.map(i => (
                <div className="marker" style={{ top: i.position_y + '%', left: i.position_x + '%', transform: `scale(${1 / scale})` }}>
                    {i.short}
                </div>
            ))}

        </div>
    )
}

export default ImageMarkerLayer;
