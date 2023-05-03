import React from 'react'
import './Footer.css'

const Footer = () => {
     return (     
          <div className='footer'>
               <div className="container-fluid">
                    <div className="row align-items-center">
                         <div className="col-12 col-md-8 text-center text-md-start pb-lg-0 pb-2">
                              <p className='my-auto'>© 2023 by Yudha Permana</p>
                         </div>
                         <div className="col-12 col-md-4 text-md-end text-center">
                              <a href="" className='mx-4'>
                                   Facebook
                              </a>
                              <a href="" className='mx-4'>
                                   Instagram
                              </a>
                              <a href="" className='mx-4'>
                                   Twitter
                              </a>
                         </div>
                    </div>
               </div>
          </div>          
     )
}

export default Footer
