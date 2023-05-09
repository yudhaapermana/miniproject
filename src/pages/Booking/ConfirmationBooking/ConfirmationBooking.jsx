import React from 'react'
import Moment  from 'moment/moment'// import { Moment } from 'moment/moment'
import { useLocation, useNavigate } from 'react-router-dom'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'

import Button from '../../../elements/Button/Button'
import './ConfirmationBooking.css'

const ConfirmationBooking = () => {
     const navigate = useNavigate()
     const location = useLocation()
     const data = location.state

     // mengunbah format tanggal menjadi dd-mm-yyyy
     const date = Moment(data.date).format('DD-MM-YYYY')
     
     console.log(data)

     return (
          <section className='confirmation-booking'>
               <div className="container-fluid px-4">
                    <div className="row justify-content-center">
                         <div className="col-lg-8 col-12">
                              <div className="bg-white text-black mx-auto px-md-5 px-4 pt-4 pt-md-4 pb-5">
                                   <div className="col-md-11 my-4 my-md-5 mx-auto">
                                        <Button
                                             classButton={'btn p-0 mb-3 text-start'}
                                             label={<HiOutlineArrowNarrowLeft className='icon-back text-dark'/>}
                                             onClick={() => navigate('/create-booking')}
                                        />
                                        <div className="row justify-content-between">
                                             <div className="col-lg-7 col-12 mb-5 mb-lg-3">
                                                  <h3 className='text-black'>Detail Boking</h3>
                                                  <hr className='pb-2'/>
                                                  <div className="row">
                                                       <div className="col-6">
                                                            <p className='text-decoration-underline'>Nama</p>
                                                       </div>
                                                       <div className="col-6">
                                                            <p>{data.fName} {data.lName}</p>
                                                       </div>
                                                  </div>
                                                  <div className="row">
                                                       <div className="col-6">
                                                            <p className='text-decoration-underline'>Email</p>
                                                       </div>
                                                       <div className="col-6">
                                                            <p>{data.email}</p>
                                                       </div>
                                                  </div>
                                                  <div className="row">
                                                       <div className="col-6">
                                                            <p className='text-decoration-underline'>No. Telepon</p>
                                                       </div>
                                                       <div className="col-6">
                                                            <p>{data.phoneNumber}</p>
                                                       </div>
                                                  </div>
                                                  <div className="row">
                                                       <div className="col-6">
                                                            <p className='text-decoration-underline'>Tanggal dan Waktu</p>
                                                       </div>
                                                       <div className="col-6">
                                                            <p>{data.time}, {date}</p>
                                                       </div>
                                                  </div>
                                                  <div className="location">
                                                       <p className='text-decoration-underline'>Alamat</p>
                                                       <p>{data.location}</p>                                   
                                                  </div>
                                                  <div className="message">
                                                       <p className='text-decoration-underline'>Detail Tambahan</p>
                                                       <p>{data.message}</p>
                                                  </div>
                                                  <hr />
                                                  <Button
                                                       classButton={'btn btn-dark rounded-0 py-2 col-12'}
                                                       type={'button'}
                                                       onClick={() => navigate('/edit-booking', {state: data})}
                                                       label={'Ubah Data Boking'}
                                                  />
                                             </div>
                                             <div className="col-lg-5 col-12">
                                                  <h3 className='text-dark'>Pembayaran</h3>
                                                  <hr className='pb-2'/>
                                                  <div className="row">
                                                       <div className="col-6">
                                                            <p>Nama Paket</p>
                                                       </div>
                                                       <div className="col-6">
                                                            <p>Harga Paket</p>
                                                       </div>
                                                  </div>
                                                  <hr />
                                                  <div className="row">
                                                       <div className="col-6">
                                                            <p>Total</p>
                                                       </div>
                                                       <div className="col-6">
                                                            <p>Harga Paket</p>
                                                       </div>
                                                  </div>
                                                  <Button
                                                       classButton={'btn btn-dark rounded-0 py-2 col-12'}
                                                       label={'Bayar Sekarang'}
                                                  />
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

export default ConfirmationBooking
