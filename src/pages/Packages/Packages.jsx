import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Button from '../../elements/Button/Button'
import './Package.css'

const Packages = () => {
     const navigate = useNavigate

     return (
          <section className='packages'>
               <div className="container-fluid px-5">
                    <h1 className='text-center pb-4'>PAKET</h1>
                    <div className="packages">
                         <div className="row justify-content-center">
                              <div className="col-md-11 col-lg-10 col-12">
                                   <div className="row">
                                        <div className="col-11 col-md-6 col-lg-4">
                                             <div className="card rounded-0 p-4 border-0 mb-4 mb-md-0">
                                                  <div className="card-body">
                                                       <h4 className='card-title'>Paket Ekonomis</h4>
                                                       <hr />
                                                       <ul className='list-unstyled' style={{ lineHeight: 1.9 }}>
                                                            <li>1 Photographer</li>
                                                            <li>1 Asisten</li>
                                                            <li>1 Album Standard Magazine</li>
                                                            <li>4 Foto & Frame 10 R</li>
                                                            <li>Semua Foto di Flash Disk</li>
                                                       </ul>
                                                       <p>Rp. 3.000.000</p>
                                                       <Link to={'/create-booking'}>
                                                            <Button 
                                                                 classButton='btn btn-dark rounded-5 py-2 px-4 col-12'
                                                                 label='Boking Sekarang'                                                                 
                                                            />
                                                       </Link>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="col-11 col-md-6 col-lg-4 mb-4 mb-md-0">
                                             <div className="card rounded-0 p-4 border-0">
                                                  <div className="card-body">
                                                       <h4 className='card-title'>Paket Standar</h4>
                                                       <hr />
                                                       <ul className='list-unstyled' style={{ lineHeight: 1.9 }}>
                                                            <li>1 Photographer</li>
                                                            <li>1 Videographer</li>
                                                            <li>1 Asisten</li>
                                                            <li>1 Wedding Teaser</li>
                                                            <li>1 Wedding Film Cinematic</li>
                                                            <li>2 Album Standard Magazine</li>
                                                            <li>4 Foto & Frame 10 R</li>
                                                            <li>Semua Foto di Flash Disk</li>                                                            
                                                       </ul>
                                                       <p>Rp. 7.000.000</p>
                                                       <Link to={'/create-booking'}>
                                                            <Button 
                                                                 classButton='btn btn-dark rounded-5 py-2 px-4 col-12'
                                                                 label='Boking Sekarang'                                                                 
                                                            />
                                                       </Link>
                                                  </div>
                                             </div>                                   
                                        </div>
                                        <div className="col-11 col-md-6 col-lg-4 mb-4 mb-md-0 mt-md-4 mt-lg-0">
                                             <div className="card rounded-0 p-4 border-0">
                                                  <div className="card-body">
                                                       <h4 className='card-title'>Paket Premium</h4>
                                                       <hr />
                                                       <ul className='list-unstyled' style={{ lineHeight: 1.9 }}>
                                                            <li>1 Photographer</li>
                                                            <li>1 Videographer</li>
                                                            <li>1 Asisten</li>
                                                            <li>1 Pilot Drone</li>
                                                            <li>1 Wedding Teaser</li>
                                                            <li>1 Wedding Film Cinematic</li>
                                                            <li>2 Album Standard Magazine</li>
                                                            <li>4 Foto & Frame 10 R</li>
                                                            <li>Semua Foto di Flash Disk</li>                                                            
                                                       </ul>                                                   
                                                       <p>Rp. 10.000.000</p>
                                                       <Link to={'/create-booking'}>
                                                            <Button 
                                                                 classButton='btn btn-dark rounded-5 py-2 px-4 col-12'
                                                                 label='Boking Sekarang'                                                                 
                                                            />
                                                       </Link>
                                                  </div>
                                             </div>                                   
                                        </div>                                        
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     )
}

export default Packages
