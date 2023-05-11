import React from 'react'

import ListPackages from '../../components/List/ListPackages'
import './Package.css'

const Packages = () => {                              

     return (
          <section className='packages'>
               <div className="container-fluid px-5">
                    <h1 className='text-center pb-4'>PAKET</h1>
                    <div className="packages">
                         <ListPackages/>
                    </div>
               </div>
          </section>
     )
}

export default Packages
