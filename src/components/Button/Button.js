import React from 'react';
import './Button.css';
function Button({value, className}) {
    
        return (
         <button className={className}>
               {value}
         </button>
        
        );
    
}
 
export default Button;
