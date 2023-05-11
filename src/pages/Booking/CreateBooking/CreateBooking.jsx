import React from 'react'
import { Formik, Form } from 'formik'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { gql, useMutation } from '@apollo/client'
import * as Yup from 'yup'
import { v4 as uuid } from 'uuid';

import FormikControl from '../../../elements/Formik/FormikControl'
import Button from '../../../elements/Button/Button'
import Loading from '../../../elements/Loading/Loading'
import './CreateBoking.css'

const ADD_BOOKING = gql`
     mutation MyMutation(
               $id: uuid!, 
               $first_name: String!, 
               $last_name: String!, 
               $email: String!, 
               $phone_number: String!, 
               $location: String!, 
               $date: date!, 
               $time: time!, 
               $message: String!, 
               $package_id: Int!
          ) {
               insert_booking_one(object: {
                    id: $id, 
                    first_name: $first_name, 
                    last_name: $last_name, 
                    email: $email, 
                    phone_number: $phone_number, 
                    package_id: $package_id, 
                    date: $date, 
                    time: $time, 
                    location: $location, 
                    message: $message
               }) {
                    id
               }
          }
`

const CreateBooking = () => {
     const [addBooking, { loading, error }] = useMutation(ADD_BOOKING)

     if (loading) {
          return <Loading />
     }

     if (error) {
          console.log(error);
          return null
     }

     const navigate = useNavigate()              
     
     const initialValues = {
          first_name: "",
          last_name: "",
          email: "",
          phone_number: "",
          package: "",
          date: "",
          time: "",          
          location: "",
          message: ""
     }

     const packageList = [
          {key: 'Pilih....', value: ''},
          {key: 'Paket Ekonomis', value: 1},
          {key: 'Paket Standar', value: 2},
          {key: 'Paket Premium', value: 3}          
     ];

     const regexCharacter = /^[a-zA-Z0-9- ]*$/;
     const regexNumber = /^\d+$/;
     const validationSchema = Yup.object({
          first_name: Yup.string()
               .matches(regexCharacter, 'nama depan tidak boleh mengandung simbol')
               .required('nama depan tidak boleh kosong'),
          last_name: Yup.string()
               .matches(regexCharacter, 'nama belakang tidak boleh mengandung simbol'),
          email: Yup.string()
               .email('masukkan email yang valid')
               .required('email tidak boleh kosong'),
          phone_number: Yup.string()
               .max(12, 'masukkan nomer telepon yang valid')
               .matches(regexNumber, 'masukkan nomer telepon yang valid')               
               .required('nomer telepon tidak boleh kosong'),
          package: Yup.string()
               .required('pilihan paket tidak boleh kosong'),
          date: Yup.string()
               .required('tanggal tidak boleh kosong'),
          time: Yup.string()
               .required('waktu mulai tidak boleh kosong'),          
          location: Yup.string()
               .required('lokasi tidak boleh kosong')                  
     })

     const onSubmit = (values) => {               
          console.log('Form data', values)
          addBooking({variables: {
               id: uuid(),               
               first_name: values.first_name, 
               last_name: values.last_name, 
               email: values.email, 
               phone_number: values.phone_number, 
               package_id: values.package, 
               date: values.date, 
               time: values.time, 
               location: values.location, 
               message: values.message
          }})
          navigate('/confirmation-booking', {state: values})          
     }

     return (
          <section className='booking'>
               <div className="container-fluid px-4">
                    <div className="row justify-content-center">
                         <div className="col-lg-8 col-12">
                              <div className="bg-white text-black mx-auto px-md-5 px-4 pt-5 pt-md-4 pb-5">
                                   <div className="col-md-11 my-4 my-md-5 mx-auto">
                                        <h3 className='text-black text-center'>Silahkan Isi Data Di Bawah</h3>
                                        <hr className='pb-4'/>
                                        <Formik
                                             initialValues={initialValues}
                                             validationSchema={validationSchema}
                                             onSubmit={onSubmit}                                   
                                        >
                                             {({ values, errors, touched, handleChange}) => {
                                                  return (
                                                       <Form>
                                                            <div className="row">
                                                                 <FormikControl
                                                                      control='input'
                                                                      className='form-group mb-3 col-12 col-md-6'
                                                                      classField={'form-control rounded-0 mb-1' + (errors.first_name && touched.first_name ? ' is-invalid' :  '')}
                                                                      type='text'
                                                                      label='Nama Depan'
                                                                      name='first_name'
                                                                      value={values.first_name} 
                                                                      onChange={handleChange}
                                                                 />
                                                                 <FormikControl
                                                                      control='input'
                                                                      className='form-group mb-3 col-12 col-md-6'
                                                                      classField={'form-control rounded-0 mb-1' + (errors.last_name && touched.last_name ? ' is-invalid' :  '')}
                                                                      type='text'
                                                                      label='Nama Belakang'
                                                                      name='last_name'
                                                                      value={values.last_name} 
                                                                      onChange={handleChange}
                                                                 />
                                                            </div>
                                                            <div className="row">
                                                                 <FormikControl
                                                                      control='input'
                                                                      className='form-group mb-3 col-12 col-md-6'
                                                                      classField={'form-control rounded-0 mb-1' + (errors.email && touched.email ? ' is-invalid' :  '')}
                                                                      type='email'
                                                                      label='Email'
                                                                      name='email'
                                                                      value={values.email} 
                                                                      onChange={handleChange}
                                                                 />
                                                                 <FormikControl
                                                                      control='input'
                                                                      className='form-group mb-3 col-12 col-md-6'
                                                                      classField={'form-control rounded-0 mb-1' + (errors.phone_number && touched.phone_number ? ' is-invalid' :  '')}
                                                                      type='text'
                                                                      label='Nomer Telepon'
                                                                      name='phone_number'
                                                                      value={values.phone_number} 
                                                                      onChange={handleChange}
                                                                 />
                                                            </div>
                                                            <FormikControl
                                                                 control='select'
                                                                 className='mb-3 col-12 col-md-12'
                                                                 classField={'form-select rounded-0 mb-1' + (errors.package && touched.package ? ' is-invalid' :  '')}
                                                                 label='Pilihan Paket'
                                                                 name='package'
                                                                 options={packageList}
                                                                 value={values.package} 
                                                                 onSelect={handleChange}
                                                            />
                                                            <div className="row">
                                                                 <FormikControl
                                                                      control='input'
                                                                      className='form-group mb-3 col-12 col-md-6'
                                                                      classField={'form-control rounded-0 mb-1' + (errors.date && touched.date ? ' is-invalid' :  '')}
                                                                      type='date'
                                                                      label='Tanggal'
                                                                      name='date'
                                                                      value={values.date} 
                                                                      onChange={handleChange}
                                                                 />
                                                                 <FormikControl
                                                                      control='input'
                                                                      className='form-group mb-3 col-12 col-md-6'
                                                                      classField={'form-control rounded-0 mb-1' + (errors.time && touched.time ? ' is-invalid' :  '')}
                                                                      type='time'
                                                                      label='Waktu Mulai'
                                                                      name='time'
                                                                      value={values.time} 
                                                                      onChange={handleChange}
                                                                 />
                                                            </div>
                                                            <div className="row">
                                                                 <FormikControl
                                                                      control='textarea'
                                                                      className='form-group mb-3 col-12 col-md-6'
                                                                      classField={'form-control rounded-0 mb-1' + (errors.location && touched.location ? ' is-invalid' :  '')}                                                            
                                                                      label='Lokasi'
                                                                      name='location'
                                                                      value={values.location} 
                                                                      onChange={handleChange}
                                                                 />
                                                                 <FormikControl
                                                                      control='textarea'
                                                                      className='form-group mb-3 col-12 col-md-6'
                                                                      classField={'form-control rounded-0 mb-1' + (errors.message && touched.message ? ' is-invalid' :  '')}                                                            
                                                                      label='Pesan (optional)'
                                                                      name='message'
                                                                      value={values.message} 
                                                                      onChange={handleChange}
                                                                 />
                                                            </div>
                                                            <Button 
                                                                 classButton={'btn btn-dark col-12 py-2 rounded-0 mt-3'}
                                                                 type={'submit'}
                                                                 label={'Selanjutnya'}
                                                                 name={'add-booking'}                                                                                                              
                                                            />                                                                                                                                                      
                                                       </Form>
                                                  )
                                             }}
                                        </Formik>                              
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     )
}

export default CreateBooking
