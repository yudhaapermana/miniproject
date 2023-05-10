import React from 'react'
import { gql, useSubscription } from '@apollo/client'

import Loading from '../../elements/Loading/Loading'
import Card from '../Card/Card'

const GET_ALL_PACKAGES = gql`
     subscription MySubscription {
          packages {
               id
               name
               detail
               price
          }
     }
`

const ListPackages = () => {
     const {data, loading, error} = useSubscription(GET_ALL_PACKAGES)
     
     if (loading) {
          return <Loading/>
     }

     if (error) {
          console.log(error);
          return null
     } 

     return (
          <div className="row justify-content-center">
               <div className="col-md-11 col-lg-10 col-12">
                    <div className="row">
                         {                                             
                              data?.packages.map((item, index) => (                                                                                                    
                                   <Card item={item} index={index} />
                              ))
                         }                                        
                    </div>
               </div>
          </div>
     )
}

export default ListPackages
