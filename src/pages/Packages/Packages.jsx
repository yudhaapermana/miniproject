import React from 'react'
import { Helmet } from 'react-helmet'

import ListPackages from '../../components/List/ListPackages'
import './Package.css'

const Packages = () => {                              
     return (
          <div>
               <Helmet>
                    <title>YPhotography | Paket</title>
               </Helmet>
               <section className='packages'>
                    <div className="container-fluid px-5">
                         <h1 className='text-center pb-4'>PAKET</h1>
                         <div className="packages">
                              <ListPackages/>
                         </div>
                    </div>
               </section>
          </div>
     )
}

export default Packages
