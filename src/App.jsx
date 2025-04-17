import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router'

import Home from './Pages/Home/Home'
import Contact from './Pages/Contact/Contact'
import ProductDetail from './Pages/ProductDetail/ProductDetail'
import About from './Pages/About/About'


function App() {


  return (
    <>
      

        <Routes>

          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='Product/:ProductId' element={<ProductDetail/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/ProductDetail' element={<ProductDetail/>}/>

        </Routes>

    </>
  )
}

export default App
