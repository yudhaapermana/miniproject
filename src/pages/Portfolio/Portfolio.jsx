import React from 'react'
import './Portfolio.css'

import PortfolioImage1 from '../../assets/images/portfolio/portfolio-1.png'
import PortfolioImage2 from '../../assets/images/portfolio/portfolio-2.png'
import PortfolioImage3 from '../../assets/images/portfolio/portfolio-3.png'
import PortfolioImage4 from '../../assets/images/portfolio/portfolio-4.png'
import PortfolioImage5 from '../../assets/images/portfolio/portfolio-5.png'
import PortfolioImage6 from '../../assets/images/portfolio/portfolio-6.png'
import PortfolioImage7 from '../../assets/images/portfolio/portfolio-7.png'

const Portfolio = () => {
     return (
          <section className='portfolio'>
               <div className="container-fluid text-center px-5">
                    <h1 className='pb-4'>PORTOFOLIO</h1>
                    <div className="portfolio-image mt-5">
                         <img src={PortfolioImage1} alt="" className='img-1 pb-2' />
                         <div className="d-flex flex-row justify-content-center pb-2">
                              <img src={PortfolioImage2} alt="" className='img-2'/>
                              <img src={PortfolioImage3} alt="" className='img-3'/>
                         </div>
                         <div className="d-flex flex-row justify-content-center pb-2">
                              <img src={PortfolioImage4} alt="" className='img-4'/>
                              <img src={PortfolioImage5} alt="" className='img-5 mx-2'/>
                              <img src={PortfolioImage6} alt="" className='img-6'/>
                         </div>
                         <img src={PortfolioImage7} alt="" className='img-7 pb-2' />
                    </div>
               </div>
          </section>
     )
}

export default Portfolio
