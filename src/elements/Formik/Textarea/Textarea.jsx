import React from 'react'
import { Field, ErrorMessage } from 'formik'

const Textarea = ({ className, classField, label, name, value, onChange }) => {
     return (
          <div className={className}>
               <label htmlFor={name} className="form-label">
                    {label}
               </label>
               <br />  
               <Field
                    as='textarea'
                    className={classField}
                    id={name}
                    name={name}                    
                    value={value}                                                                                                                                
                    onChange={onChange}
               />
               <ErrorMessage name={name} component='div' className='invalid-feedback'/> 
          </div>
     )
}

export default Textarea
