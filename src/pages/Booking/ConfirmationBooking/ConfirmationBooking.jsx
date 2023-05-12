import React from 'react'
import { gql, useMutation } from '@apollo/client';
import { useNavigate, useParams } from 'react-router-dom'
import { HiOutlineX } from "react-icons/hi";
import Swal from 'sweetalert2';

import Button from '../../../elements/Button/Button'
import ListDetailBooking from '../../../components/List/ListDetailBooking'
import './ConfirmationBooking.css'

const DELETE_BOOKING = gql`
     mutation MyMutation($id: uuid!) {
          delete_booking_by_pk(id: $id) {
               id
          }
     }
`

const ConfirmationBooking = () => {
     const [deleteBooking] = useMutation(DELETE_BOOKING)

     const navigate = useNavigate()     
     const { id_booking } = useParams()
     
     const deleteItem = (idx) => {
          deleteBooking({variables: {
               id: idx
          }})
          location.replace('/')
     }

     return (
          <section className='confirmation-booking'>
               <div className="container-fluid px-4">
                    <div className="row justify-content-center mx-2">
                         <div className="col-lg-9 col-11">
                              <div className="bg-white text-black mx-auto px-md-5 px-4 pt-4 pt-md-4 pb-5">
                                   <div className="col-md-11 my-4 my-md-5 mx-auto ">
                                        <div className="text-end">
                                        <Button
                                             classButton={'btn p-0 mb-3'}
                                             label={<HiOutlineX className='icon-back text-dark'/>}
                                             onClick={() => {
                                                  Swal.fire({
                                                       width: 400,                                                       
                                                       icon: "warning",
                                                       text: "Yakin ingin membatalkan proses boking?",
                                                       showCancelButton: true,
                                                       cancelButtonText: "Tidak",
                                                       confirmButtonColor:"#3085d6",
                                                       cancelButtonColor: "#d33",
                                                       confirmButtonText: "Yakin",
                                                       }).then((result) => {
                                                            if (result.isConfirmed) {
                                                            deleteItem(id_booking)                                                            
                                                       }
                                                  });                                                  
                                             }}
                                        />
                                        </div>
                                        <div className="row justify-content-center">
                                             <ListDetailBooking id={id_booking}/>
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
