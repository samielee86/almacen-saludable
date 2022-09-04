import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Main from './components/Main/Main'
import { BrowserRouter } from 'react-router-dom'

const App = () => {

  return (
    <BrowserRouter>
        <header>
            <NavBar/>
        </header>
        <Main/>
        <footer>Footer</footer>
    </BrowserRouter>
  )
}

export default App;