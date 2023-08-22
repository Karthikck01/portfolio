import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './NavBar'
import LandingPage from './LandingPage'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <>
    <div className={darkMode ? "text-bg-dark" : "text-bg-light"}>

    <NavBar setDarkMode={setDarkMode}/>
    <LandingPage/>

    </div>
    </>
  )
}

export default App
