// @ts-ignore
import {MapInteractionCSS} from "react-map-interaction";
import './imageviewerTwo.scss'
import React, { useState} from "react";
import ImageMarkerLayer from "./ImageMarkerLayer/ImageMarkerLayer.tsx";
import rentalData from '../assets/desks.json'
import useKeyEventListener from "../utils/useKeyEventListener.ts";
import {TransformComponent, TransformWrapper} from "react-zoom-pan-pinch";

interface IMapInteractionData {
    scale: number;
    translation: {
        x: number;
        y: number;
    }
}

interface IImageViewer {

}

const ImageViewerTwo: React.FunctionComponent<IImageViewer> = (props) => {
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

                <TransformWrapper
                    initialScale={1}
                    initialPositionX={200}
                    initialPositionY={100}
                    onWheel={d => setValue({
                        scale: d.state.scale,
                        translation: {
                            x: d.state.positionX,
                            y: d.state.positionY,
                        }
                    })}
                    limitToBounds
                >
                    <TransformComponent>
                        <div className="interaction">
                            <ImageMarkerLayer desks={rentalData.office[shownOffice].desks} scale={value.scale} image={image}/>
                        </div>
                    </TransformComponent>
                </TransformWrapper>
            </div>
        </div>
    )
}

export default ImageViewerTwo;
