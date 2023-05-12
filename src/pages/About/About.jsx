import React from 'react'
import { Helmet } from 'react-helmet'

import AboutImage from '../../assets/images/about-image.png'
import './About.css'

const About = () => {
     return (
          <div>
               <Helmet>
                    <title>YPhotography | About</title>
               </Helmet>
               <section className='about'>
                    <div className='container-fluid text-center'>
                         <h1 className='pb-4'>TENTANG KAMI</h1>
                         <div className="d-flex flex-lg-row flex-column-reverse justify-content-center mt-5 mx-5">
                              <div className="about-title mx-auto mx-lg-0">
                                   <p>
                                        YPhotograpy adalah brand Production House penyedia layanan jasa foto video pernikahan yang sudah berdiri sejak 2020 di kota Bandung. Kami memahami pentingnya dokumentasi sebuah momen satu kali dalam seumur hidup pelanggan kami. Dengan slogan kami “One Timeless Capture”, kami siap mengemas momen dan hasil dokumentasi acara anda dengan sempurna.                                   
                                   </p>
                              </div>
                              <div className="about-image text-center">
                                   <img src={AboutImage} alt="" className='img-fluid'/>
                              </div>
                         </div>
                    </div>
               </section>
          </div>
     )
}

export default About
