import React from 'react'
import { Field, ErrorMessage } from 'formik'

const Input = ({ className, classField, label, name, type, accept, value, onChange }) => {
     return (
          <div className={className}>
               <label htmlFor={name} className="form-label">
                    {label}
               </label>
               <br />  
               <Field
                    className={classField}
                    id={name}
                    name={name}
                    type={type}
                    accept={accept}
                    value={value}                    
                    onChange={onChange}                    
               />
               <ErrorMessage name={name} component='div' className='invalid-feedback'/>                                                             
          </div>
     )
}

export default Input

