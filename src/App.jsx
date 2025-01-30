import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Login'
import SignUp from './SignUp'
import Home from './Home'
import About from './About'
import Forget from './Forget'
import Change from './Change'
import Doubt from './Doubt'

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<Login/>}/>
          <Route path = '/signup' element = {<SignUp/>}/>
          <Route path = '/home' element = {<Home/>}/>
          <Route path = '/about' element = {<About/>}/>
          <Route path = '/forget' element = {<Forget/>}/>
          <Route path = '/change' element = {<Change/>}/>
          <Route path = '/doubt' element = {<Doubt/>}/>







        </Routes>
    
    </BrowserRouter>
  )
}

export default App
