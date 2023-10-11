import {useState} from 'react'
import {MapInteractionCSS} from "react-map-interaction";
import viteLogo from './assets/test.svg'
import './App.scss'
import SvgVersion from './SvgVersion';
import ImageViewer from "./imageVersion/ImageViewer.tsx";
import DummyFrame from "./dummyframe/DummyFrame.tsx";

function App() {

    const [mode, setMode] = useState('img')


    return (
        <>
            <div className="fab" onClick={() => setMode(prev => mode === 'img' ? 'svg' : 'img')}>
                    Wechseln
            </div>
            {mode === 'img' &&
            <DummyFrame>

                

                <ImageViewer/>
            </DummyFrame>}

            { mode === 'svg' && <SvgVersion/> }
        </>


    )
}

export default App
