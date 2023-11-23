import React from 'react'
import { Navbar } from './Components/Navbar/Navbar'
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Login from './Pages/Login'

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path = '/' element = {<HomePage/>}/>
            <Route path = '/login' element = {<Login />} />
          </Routes>
        </BrowserRouter>
        
    </div>
  )
}
