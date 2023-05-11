import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'

import Button from '../../../elements/Button/Button'
import FormEditBooking from '../../../components/Form/FormBooking/EditBooking/FormEditBooking'
import './EditBooking.css'


const EditBooking = () => {
     const navigate = useNavigate()

     const { id_booking } = useParams()

     return (
          <section className='edit-booking'>
               <div className="container-fluid px-4">
                    <div className="row justify-content-center">
                         <div className="col-lg-8 col-12">
                              <div className="bg-white text-black mx-auto px-md-5 px-4 pt-4 pt-md-4 pb-5">
                                   <div className="col-md-11 my-4 my-md-5 mx-auto">
                                        <Button
                                             classButton={'btn p-0 mb-3'}
                                             label={<HiOutlineArrowNarrowLeft className='icon-back text-dark'/>}
                                             onClick={() => navigate(-1)}
                                        />                                                                                                         
                                        <FormEditBooking id={id_booking}/>                                     
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     )
}

export default EditBooking
