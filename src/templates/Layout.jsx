import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Portfolio from '../pages/Portfolio/Portfolio'
import Packages from '../pages/Packages/Packages'
import Contact from '../pages/Contact/Contact'
import CreateBooking from '../pages/Booking/CreateBooking/CreateBooking'
import ConfirmationBooking from '../pages/Booking/ConfirmationBooking/ConfirmationBooking'
import EditBooking from '../pages/Booking/EditBooking/EditBooking'

const Layout = () => {
     return (
          <>
               <Navbar/>

               <Routes>
                    <Route index element={ <Home/> } />
                    <Route path='/about-us' element={ <About/> } />
                    <Route path='/portfolio' element={ <Portfolio/> } />
                    <Route path='/packages' element={ <Packages/> } />
                    <Route path='/contact' element={ <Contact/> } />
                    <Route path='/create-booking' element={ <CreateBooking/> } />
                    <Route path='/confirmation-booking/:id_booking' element={ <ConfirmationBooking/> } />
                    <Route path='/edit-booking/:id_booking' element={ <EditBooking/> } />
               </Routes>

               <Footer/>
          </>
     )
}

export default Layout
