import React, {useState} from "react";
import rentalData from "../assets/desks.json";
import useKeyEventListener from "../utils/useKeyEventListener.ts";
import ImageMarkerLayer from "../imageVersion/ImageMarkerLayer/ImageMarkerLayer.tsx";
import './fixedImageviewer.scss'

interface IFixedImageViewer {

}
const FixedImageViewer: React.FunctionComponent<IFixedImageViewer> = (props) => {
    const {} = props;

    const [shownOffice, setShownOffice] = useState(0)


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
        <div className="fixedImageViewer">
            <div className="background" style={{backgroundImage: `url(${image})`}}>

            </div>
            <div className="imageFrame">
                <ImageMarkerLayer desks={rentalData.office[shownOffice].desks} scale={1} image={image}/>
            </div>
        </div>
    )
}

export default FixedImageViewer;
