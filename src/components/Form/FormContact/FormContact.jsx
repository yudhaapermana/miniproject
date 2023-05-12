import React from 'react'
import { Form, Formik } from "formik";
import * as Yup from "yup";
import Swal from 'sweetalert2';

import FormikControl from '../../../elements/Formik/FormikControl';
import Button from '../../../elements/Button/Button';

const FormContact = () => {
     const initialValues = {
          name: "",
          email: "",
          subject: "",
          message: ""
     }

     const validationSchema = Yup.object({
          name: Yup.string()
               .required('kolom tidak boleh kosong'),
          email: Yup.string()
               .email('masukkan email yang valid')
               .required('kolom tidak boleh kosong'),
          subject: Yup.string()
               .required('kolom tidak boleh kosong'),
          message: Yup.string()
               .required('kolom tidak boleh kosong')
     })

     const onSubmit = () => {
          Swal.fire({
               icon: 'success',
               title: 'Pesan Berhasil Terkirim',
               iconColor: 'black'                   
          })          
     }

     return (
          <>
               <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
               >
                    {({values, errors, handleChange}) => {
                         return (
                              <Form>
                                   <FormikControl
                                        control='input'
                                        className='form-group mb-3 col-12 col-md-12'
                                        classField={'form-control rounded-0 border-dark mb-1' + (errors.name? ' is-invalid' :  '')}
                                        type='text'
                                        label='Nama'
                                        name='name'
                                        value={values.name} 
                                        onChange={handleChange}
                                   />
                                   <div className="row">
                                        <FormikControl
                                             control='input'
                                             className='form-group mb-3 col-12 col-md-6'
                                             classField={'form-control rounded-0 border-dark mb-1' + (errors.email? ' is-invalid' :  '')}
                                             type='email'
                                             label='Email'
                                             name='email'
                                             value={values.email} 
                                             onChange={handleChange}
                                        />
                                        <FormikControl
                                             control='input'
                                             className='form-group mb-3 col-12 col-md-6'
                                             classField={'form-control rounded-0 border-dark mb-1' + (errors.subject? ' is-invalid' :  '')}
                                             type='text'
                                             label='Subject'
                                             name='subject'
                                             value={values.subject} 
                                             onChange={handleChange}
                                        />                                                                 
                                   </div>
                                   <FormikControl
                                        control='textarea'
                                        className='form-group mb-3 col-12 col-md-12'
                                        classField={'form-control rounded-0 border-dark mb-1' + (errors.message? ' is-invalid' :  '')}
                                        type='message'
                                        label='Pesan'
                                        name='message'
                                        value={values.message} 
                                        onChange={handleChange}
                                   />
                                   <Button
                                        classButton='btn btn-dark col-12 rounded-0 py-2'
                                        type='submit'
                                        label='Submit'
                                   />
                              </Form>
                         )
                    }}
               </Formik>
          </>
     )
}

export default FormContact
