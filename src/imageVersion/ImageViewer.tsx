// @ts-ignore
import { MapInteractionCSS } from "react-map-interaction";
import './imageviewer.scss'
import React, {useMemo, useState} from "react";
import ImageMarkerLayer from "./ImageMarkerLayer/ImageMarkerLayer.tsx";
import rentalData from '../assets/desks.json'
import deskOne from "../assets/desk-group-1.jpeg";

interface IImageViewer {

}
const ImageViewer: React.FunctionComponent<IImageViewer> = (props) => {
    const {} = props;




    const [value, setValue] = useState({
        scale: 1,
        translation: {
            x: 0,
            y: -window.innerHeight / 4
        }
    })


    return (
        <div className="imageViewer" >
            <div className="background" style={{ backgroundImage: `url(${deskOne})`}}>

            </div>
            <MapInteractionCSS
            value={value}
            onChange={setValue}
            >
                <div className="interaction">
                    <ImageMarkerLayer desks={rentalData.desks} scale={value.scale} />
                </div>
            </MapInteractionCSS>
        </div>
    )
}

export default ImageViewer;
