import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../elements/Button/Button'


const Card = ({item, index}) => {
     return (
          <div className="col-11 col-md-6 col-lg-4" key={index}>
               <div className="card rounded-0 p-4 border-0 mb-4 mb-md-0">
                    <div className="card-body">
                         <h4 className='card-title'>{item.name}</h4>
                         <hr />                                                                                                                                                                                                                                                                                                                              
                         <ul className='list-unstyled' style={{ lineHeight: 1.9 }}>
                              {
                                   item.detail.split(",").map((detailItem, index) => (
                                        <li key={index}>{detailItem}</li>
                                   ))
                              }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                         </ul>
                         <p>{item.price}</p>
                         <Link to={'/create-booking'}>
                              <Button 
                                   classButton='btn btn-dark rounded-5 py-2 px-4 col-12'
                                   label='Boking Sekarang'                                                                 
                              />
                         </Link>
                    </div>
               </div>
          </div>
     )
}

export default Card
