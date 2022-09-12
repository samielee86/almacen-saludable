import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Main from './components/Main/Main'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

const App = () => {

  return (
    <BrowserRouter>
    <div className="wrapper-site">
        <header>
            <NavBar/>
        </header>
        <Main/>
        <footer>Footer</footer>
    </div>
    </BrowserRouter>
  )
}

export default App;