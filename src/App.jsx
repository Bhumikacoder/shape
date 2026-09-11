import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import Navbar from './components/Navbar'
import Herosection from './components/Hero'
import Hero from './components/Hero'

function App() {
    return (
        <>
            <Navbar />
            <Hero />
        </>
        
    )
}

export default App


