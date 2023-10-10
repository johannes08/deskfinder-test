import { useState } from 'react'
import { MapInteractionCSS } from "react-map-interaction";
import viteLogo from './assets/test.svg'
import './App.scss'
import SvgVersion from './SvgVersion';

function App() {


  return (
    <MapInteractionCSS>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <SvgVersion />
    </MapInteractionCSS>
  )
}

export default App
