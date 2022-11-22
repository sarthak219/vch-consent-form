import React from 'react'

function Button({id, text, name, className, onClick,...props}) {
  return (
    <button 
        id={id??""} 
        className={className ? className : "btn btn-primary"} 
        onClick={(e)=>{onClick(e)}}
        >
        {text ?? ""}
    </button>
  )
}

export default Button