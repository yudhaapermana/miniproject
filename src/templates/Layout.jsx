import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'

const Layout = () => {
     return (
          <>
               <Navbar/>

               <Routes>
                    <Route index element={ <Home/> } />
                    <Route path='/about-us' element={ <About/> } />
               </Routes>

               <Footer/>
          </>
     )
}

export default Layout
