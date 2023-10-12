// @ts-ignore
import {MapInteractionCSS} from "react-map-interaction";
import './imageviewer.scss'
import React, {useMemo, useState} from "react";
import ImageMarkerLayer from "./ImageMarkerLayer/ImageMarkerLayer.tsx";
import rentalData from '../assets/desks.json'
import expose from "../assets/expose.png";
import useKeyEventListener from "../utils/useKeyEventListener.ts";

interface IMapInteractionData {
    scale: number;
    translation: {
        x: number;
        y: number;
    }
}

interface IImageViewer {

}

const ImageViewer: React.FunctionComponent<IImageViewer> = (props) => {
    const {} = props;

    const [shownOffice, setShownOffice] = useState(0)

    const [value, setValue] = useState<IMapInteractionData>({
        scale: 1,
        translation: { // Translation nicht mehr als über die hälfte - scale beachten
            x: 0,
            y: -window.innerHeight / 4
        }
    })

    const handleNext = () => {
        const count = Object.keys(rentalData.office).length
        setShownOffice(prevState => (prevState + 1) % count)
    }

    const handlePrev = () => {
        const count = Object.keys(rentalData.office).length
        setShownOffice(prevState => (count + prevState - 1) % count)
    }

    useKeyEventListener({
        ArrowLeft: handlePrev,
        ArrowRight: handleNext,
        ArrowUp: handleNext,
        ArrowDown:handlePrev,
    })

    const image = rentalData.office[shownOffice].image

    return (
        <div className="imageViewer">
            <div className="background" style={{backgroundImage: `url(${image})`}}>

            </div>
            <div className="mapInteraction">
                <MapInteractionCSS
                    value={value}
                    onChange={setValue}
                    minScale={1}
                    maxScale={3}
                >
                    <div className="interaction">
                        <ImageMarkerLayer desks={rentalData.office[shownOffice].desks} scale={value.scale} image={image}/>
                    </div>
                </MapInteractionCSS>
            </div>
        </div>
    )
}

export default ImageViewer;
