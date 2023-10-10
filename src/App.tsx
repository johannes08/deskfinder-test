import { useState } from 'react'
import { MapInteractionCSS } from "react-map-interaction";
import viteLogo from './assets/test.svg'
import './App.scss'

function App() {


  return (
    <MapInteractionCSS>
        <img src={viteLogo} className="logo" alt="Vite logo" />
    </MapInteractionCSS>
  )
}

export default App
