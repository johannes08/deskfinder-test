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
            <DummyFrame>

                <div className="fab" onClick={() => setMode(prev => mode === 'img' ? 'svg' : 'img')}>
                    Wechseln
                </div>

                {mode === 'img' &&
                    <ImageViewer/>
                }

                {mode === 'svg' &&
                    <MapInteractionCSS>
                        <img src={viteLogo} className="logo" alt="Vite logo"/>
                        <SvgVersion/>
                    </MapInteractionCSS>}

            </DummyFrame>


        </>


    )
}

export default App
