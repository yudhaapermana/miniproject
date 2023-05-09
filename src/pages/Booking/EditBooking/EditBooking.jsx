import React from 'react'
import { Formik, Form} from 'formik'
import { useLocation, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'

import FormikControl from '../../../elements/Formik/FormikControl'
import Button from '../../../elements/Button/Button'
import './EditBooking.css'

const EditBooking = () => {
     const navigate = useNavigate()
     const location = useLocation()
     const data = location.state

     const initialValues = {
          fName: data.fName,
          lName: data.lName,
          email: data.email,
          phoneNumber: data.phoneNumber,
          package: data.package,
          date: data.date,
          time: data.time,          
          location: data.location,
          message: data.message
     }

     const packageList = [
          {key: 'Pilih....', value: ''},
          {key: 'Paket Ekonomis', value: '1'},
          {key: 'Paket Standar', value: '2'},
          {key: 'Paket Premium', value: '3'}          
     ];

     const regexCharacter = /^[a-zA-Z0-9- ]*$/;
     const regexNumber = /^\d+$/;
     const validationSchema = Yup.object({
          fName: Yup.string()
               .matches(regexCharacter, 'nama depan tidak boleh mengandung simbol')
               .required('nama depan tidak boleh kosong'),
          lName: Yup.string()
               .matches(regexCharacter, 'nama belakang tidak boleh mengandung simbol'),
          email: Yup.string()
               .email('masukkan email yang valid')
               .required('email tidak boleh kosong'),
          phoneNumber: Yup.string()
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
          navigate('/confirmation-booking', {state: values})          
     }

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
                                                                      classField={'form-control rounded-0 mb-1' + (errors.fName && touched.fName ? ' is-invalid' :  '')}
                                                                      type='text'
                                                                      label='Nama Depan'
                                                                      name='fName'
                                                                      value={values.fName} 
                                                                      onChange={handleChange}
                                                                 />
                                                                 <FormikControl
                                                                      control='input'
                                                                      className='form-group mb-3 col-6 col-md-6'
                                                                      classField={'form-control rounded-0 mb-1' + (errors.lName && touched.lName ? ' is-invalid' :  '')}
                                                                      type='text'
                                                                      label='Nama Belakang'
                                                                      name='lName'
                                                                      value={values.lName} 
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
                                                                      classField={'form-control rounded-0 mb-1' + (errors.phoneNumber && touched.phoneNumber ? ' is-invalid' :  '')}
                                                                      type='text'
                                                                      label='Nomer Telepon'
                                                                      name='phoneNumber'
                                                                      value={values.phoneNumber} 
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
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     )
}

export default EditBooking
