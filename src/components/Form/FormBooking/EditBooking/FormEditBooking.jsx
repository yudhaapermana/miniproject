import React from 'react'
import { Formik, Form} from 'formik'
import { useNavigate, useParams } from 'react-router-dom'
import { gql, useMutation, useSubscription } from '@apollo/client'
import * as Yup from 'yup'

import FormikControl from '../../../../elements/Formik/FormikControl'
import Button from '../../../../elements/Button/Button'
import LoadingBooking from '../../../../elements/Loading/LoadingBooking'

const LOAD_BOOKING = gql`
     subscription MySubscription($_eq: uuid!) {
          booking(where: {id: {_eq: $_eq}}) {
               first_name
               last_name
               email
               phone_number
               package_id
               date
               time
               location
               message               
          }
     }
`

const UPDATE_BOOKING = gql`
     mutation MyMutation(
               $id: uuid!, 
               $first_name: String!, 
               $last_name: String!, 
               $email: String!, 
               $phone_number: String!, 
               $package_id: Int!, 
               $date: date!, 
               $time: String!, 
               $location: String!, 
               $message: String!
          ) {
               update_booking_by_pk(pk_columns: {id: $id}, 
                    _set: {
                         first_name: $first_name, 
                         last_name: $last_name, 
                         email: $email, 
                         phone_number: $phone_number, 
                         package_id: $package_id, 
                         date: $date, time: $time, 
                         location: $location, 
                         message: $message
                    }) {
                         id
                    }
          }
`

const FormEditBooking = ({id}) => {
     const navigate = useNavigate()
     
     const { data, loading, error } = useSubscription(LOAD_BOOKING, {
          variables: {
               _eq: id
          }          
     })

     const [updateBooking, {loading: loadingUpdate}] = useMutation(UPDATE_BOOKING)

     if (loading || loadingUpdate ) {
          return <LoadingBooking />          
     }

     if (error) {
          console.log(error);
          return null
     }

     const initialValues = {
          first_name: data.booking[0].first_name,
          last_name: data.booking[0].last_name,
          email: data.booking[0].email,
          phone_number: data.booking[0].phone_number,
          package_id: data.booking[0].package_id,
          date: data.booking[0].date,
          time: data.booking[0].time,          
          location: data.booking[0].location,
          message: data.booking[0].message
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
               .matches(regexNumber, 'masukkan nomer telepon yang valid')               
               .required('nomer telepon tidak boleh kosong'),
          package_id: Yup.string()
               .required('pilihan paket tidak boleh kosong'),
          date: Yup.string()
               .required('tanggal tidak boleh kosong'),
          time: Yup.string()               
               .required('waktu mulai tidak boleh kosong'),          
          location: Yup.string()
               .required('lokasi tidak boleh kosong')                  
     })

     const onSubmit = (values) => {
          updateBooking({variables: {               
               id: id,               
               first_name: values.first_name, 
               last_name: values.last_name, 
               email: values.email, 
               phone_number: values.phone_number, 
               package_id: values.package_id, 
               date: values.date, 
               time: values.time, 
               location: values.location, 
               message: values.message
          }})
          navigate(`/confirmation-booking/${id}`)
     }

     return (
          <>
               <h3 className='text-black text-center'>Ubah Data Boking</h3>
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
                                             className='form-group mb-3 col-6 col-md-6'
                                             classField={'form-control rounded-0 mb-1' + (errors.first_name && touched.first_name ? ' is-invalid' :  '')}
                                             type='text'
                                             label='Nama Depan'
                                             name='first_name'
                                             value={values.first_name} 
                                             onChange={handleChange}
                                        />
                                        <FormikControl
                                             control='input'
                                             className='form-group mb-3 col-6 col-md-6'
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
                                        classField={'form-select rounded-0 mb-1' + (errors.package_id && touched.package_id ? ' is-invalid' :  '')}
                                        label='Pilihan Paket'
                                        name='package_id'
                                        options={packageList}
                                        value={values.package_id} 
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
                                             label='Pesan'
                                             name='message'
                                             value={values.message} 
                                             onChange={handleChange}
                                        />
                                   </div>                                                  
                                   <Button 
                                        classButton={'btn btn-dark col-12 py-2 rounded-0 mt-3'}
                                        type={'submit'}
                                        label={'Simpan'}
                                        name={'edit-booking'}
                                   />                                                         
                              </Form>
                         )
                    }}
               </Formik>
          </>
     )
}


export default FormEditBooking
