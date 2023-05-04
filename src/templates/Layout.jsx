import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Portfolio from '../pages/Portfolio/Portfolio'

const Layout = () => {
     return (
          <>
               <Navbar/>

               <Routes>
                    <Route index element={ <Home/> } />
                    <Route path='/about-us' element={ <About/> } />
                    <Route path='/portfolio' element={ <Portfolio/> } />
               </Routes>

               <Footer/>
          </>
     )
}

export default Layout
