import React from 'react'
import HeroImage  from '../../assets/images/hero-image.png'
import LogoBlack from '../../assets/images/logo-black.png'

import './Home.css'

const Home = () => {
     return (
          <section className='hero'>
               <div className="container-fluid">                    
                    <div className="hero-title position-absolute text-center shadow-sm">
                         <img src={LogoBlack} alt="" width={150}/>
                         <h1 className='text-center'>WEDDING <br /> PHOTOGRAPHY</h1>
                         <div className='btn btn-dark rounded-5 px-4 py-2'>
                              <a href="/create-booking" className='text-decoration-none text-white'>Boking Sekarang</a>
                         </div>
                    </div>
                    <div className="hero-image text-end">
                         <img src={HeroImage} alt=""/>
                    </div>
               </div>
          </section>
     )
}

export default Home
