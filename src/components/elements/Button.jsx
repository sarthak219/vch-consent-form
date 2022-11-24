import React from 'react'
import "../../assets/Css/elementStyles.css";

function Button({id, text, name, className, onClick,...props}) {
  return (
    <button 
        id={id??""} 
        className={className ? className : "btn btn-primary"} 
        onClick={(e)=>{onClick(e)}}
        type={props.type ?? "submit"}
        >
        {text ?? ""}
    </button>
  )
}

export default Button