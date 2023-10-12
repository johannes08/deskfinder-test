import React, {useState} from 'react'
import {MapInteractionCSS} from "react-map-interaction";
import './App.scss'
import SvgVersion from './SvgVersion';
import ImageViewer from "./imageVersion/ImageViewer.tsx";
import DummyFrame from "./dummyframe/DummyFrame.tsx";
import FixedImageViewer from "./fixedImageVersion/finxedImageViewer.tsx";
import {IDictionary} from "./utils/useKeyEventListener.ts";
import SvgVersionFixed from "./SvgVersionFixed/SvgVersionFixed.tsx";
import SecondSvg from "./SecondSVG/SecondSVG.tsx";
import ImageViewerTwo from "./imageVersionTwo/ImageViewerTwo.tsx";

function App() {

    const modes = ['img', 'imgV2','fixedImg', 'svg', 'fixedSvg', 'secondSvg']

    const [modeIndex, setModeIndex] = useState(0)

    const mode = modes[modeIndex]
    const components: IDictionary<React.ReactNode> = {
        img: <ImageViewer/>,
        svg: <SvgVersion/>,
        fixedImg: <FixedImageViewer />,
        fixedSvg: <SvgVersionFixed />,
        imgV2: <ImageViewerTwo />,
        secondSvg: <SecondSvg />
    }

    return (
        <>
            <DummyFrame>

                <div className="fab" onClick={() => setModeIndex(prevState => (prevState + 1) % modes.length)}>
                    ({modes[modeIndex]}) Wechseln
                </div>

                { components[mode] ?? null }
            </DummyFrame>


        </>


    )
}

export default App
