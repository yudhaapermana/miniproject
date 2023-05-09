import React from 'react'
import { Field, ErrorMessage } from 'formik'

const Select = ({ className, classField, label, name, options, value, onSelect }) => {
     return (
          <div className={className}>
               <label htmlFor={name} className="form-label">
                    {label}
               </label>
               <br /> 
               <Field
                    as='select'
                    className={classField}
                    id={name}
                    name={name}                    
                    value={value}
                    onSelect={onSelect}                                                                                                                                   
               >
                   {options.map(option => {
                         return (
                              <option key={option.value} value={option.value}>
                                   {option.key}
                              </option>
                         )
                   })}
               </Field>
               <ErrorMessage name={name} component='div' className='invalid-feedback'/> 
          </div>
     )
}

export default Select
