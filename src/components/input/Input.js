import React from 'react'
import './input.css';

export default function Input({type, name, onChange, placeholder, value}) {
    return (
        <div>
         <input 
         className="input" 
         type={type} 
         name={name} 
         onChange={onChange}
         placeholder={placeholder}
         value={value}
         />
        </div>
    )
}
