import React from 'react'

const Button = ({ classButton, type, id, name, onClick, label}) => {
     return (
          <>
               <button
                    className={classButton}
                    type={type}
                    id={id ? id : ''}
                    name={name}
                    onClick={onClick}
               >
                    {label}
               </button>    
          </>
     )
}

export default Button
