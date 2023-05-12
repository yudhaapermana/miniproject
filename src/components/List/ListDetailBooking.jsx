import React from 'react'
import Moment  from 'moment/moment'
import { useNavigate, useParams } from 'react-router-dom'
import { gql, useSubscription } from '@apollo/client'
import Swal from 'sweetalert2'

import Button from '../../elements/Button/Button'
import LoadingBooking from '../../elements/Loading/LoadingBooking'

const GET_DETAIL_BOOKING = gql`
     subscription MySubscription($_eq: uuid!) {
          booking(where: {id: {_eq: $_eq}}) {
               first_name
               last_name
               email
               phone_number
               date
               time
               location
               message
               booking_package {
                    name
                    price
               }
          }
     }
`

const ListDetailBooking = ({id}) => {
     const navigate = useNavigate()               

     const {data, loading, error} = useSubscription(GET_DETAIL_BOOKING, {
          variables: {
               _eq: id
          }
     })

     if (loading) {
          return <LoadingBooking />
     }

     if (error) {
          console.log(error);
          return null
     }

     const onClick = () => {
          Swal.fire({
               width: 400,
               text: "Yakin ingin melakukan pembayaran?",
               icon: "warning",
               showCancelButton: true,
               cancelButtonText: "Tidak",
               confirmButtonColor: "#3085d6",
               cancelButtonColor: "#d33",
               confirmButtonText: "Iya, yakin",
          }).then((result) => {
               if (result.isConfirmed) {
                    Swal.fire({
                         width: 400,
                         icon: "success",
                         title: "Berhasil",
                         text: "Pembayaran berhasil dilakukan",
                         iconColor: "black",
                         confirmButtonText: "OK",
                    }).then((result) => {
                         if (result.isConfirmed) {
                              navigate("/");
                         }
                    });
               }
          });
     }

     return (
          <>
               {
                    data?.booking.map((item) => (
                         <>                    
                              <div className="col-lg-7 col-12 mb-5 mb-lg-3">
                                   <h3 className='text-black'>Detail Boking</h3>
                                   <hr className='pb-2'/>                                                                 
                                   <div className="row">
                                        <div className="col-6">
                                             <p className='text-decoration-underline'>Nama</p>
                                        </div>
                                        <div className="col-6">
                                             <p>{item.first_name} {item.last_name}</p>
                                        </div>
                                   </div>
                                   <div className="row">
                                        <div className="col-6">
                                             <p className='text-decoration-underline'>Email</p>
                                        </div>
                                        <div className="col-6">
                                             <p>{item.email}</p>
                                        </div>
                                   </div>
                                   <div className="row">
                                        <div className="col-6">
                                             <p className='text-decoration-underline'>No. Telepon</p>
                                        </div>
                                        <div className="col-6">
                                             <p>{item.phone_number}</p>
                                        </div>
                                   </div>
                                   <div className="row">
                                        <div className="col-6">
                                             <p className='text-decoration-underline'>Tanggal dan Waktu</p>
                                        </div>
                                        <div className="col-6">
                                             <p>{item.time}, {Moment(item.date).format('DD-MMM-YYYY')}</p>
                                        </div>
                                   </div>
                                   <div className="location">
                                        <p className='text-decoration-underline'>Alamat</p>
                                        <p>{item.location}</p>                                   
                                   </div>
                                   <div className="message">
                                        <p className='text-decoration-underline'>Detail Tambahan</p>
                                        <p>{item.message}</p>
                                   </div>
                                   <hr />
                                   <Button
                                        classButton={'btn btn-dark rounded-0 py-2 col-12'}
                                        type={'button'}
                                        onClick={() => navigate(`/edit-booking/${id}`)}
                                        label={'Ubah Data Boking'}
                                   />
                              </div>                                             
                              <div className="col-lg-5 col-12">
                                   <h3 className='text-dark'>Pembayaran</h3>
                                   <hr className='pb-2'/>
                                   <div className="row">
                                        <div className="col-6">
                                             <p>{item.booking_package.name}</p>
                                        </div>
                                        <div className="col-6">
                                             <p>{item.booking_package.price}</p>
                                        </div>
                                   </div>
                                   <hr />
                                   <div className="row">
                                        <div className="col-6">
                                             <p>Total</p>
                                        </div>
                                        <div className="col-6">
                                             <p>{item.booking_package.price}</p>
                                        </div>
                                   </div>
                                   <Button
                                        classButton={'btn btn-dark rounded-0 py-2 col-12'}
                                        label={'Bayar Sekarang'}
                                        onClick={onClick}
                                   />
                              </div> 
                         </>                         
                    ))
               }
          </>
     )
}

export default ListDetailBooking
