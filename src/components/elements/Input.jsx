import React, {useEffect, useRef, useState } from 'react'
import "../../assets/Css/elementStyles.css"

function Input({id, type, label}) {
    const inputRef = useRef(null);
    const [isFocussed, setIsFocussed] = useState(false);
    const [val, setVal] = useState("");
    const [isBlank, setIsBlank] = useState(true);

    useEffect(()=>{
        const initVal = inputRef.current.value;
        setIsBlank(initVal === null || initVal === "" || initVal === 0)
    }, [inputRef])

    useEffect(()=>{
        setIsBlank(val === null || val === "" || val === 0)
    }, [val])

    return (
        <div className="input-field mb-3"> 
            <input  ref={inputRef}
                    id={id ?? ""} 
                    type={type} 
                    onFocus={()=>{setIsFocussed(true)}} 
                    onBlur={()=>{setIsFocussed(false)}}
                    value={val}
                    onChange={(e)=>{setVal(e.target.value)}}
                />
            <label className={isFocussed || !isBlank ? "input-lbl-focussed":""} htmlFor={id ?? ""}>{label}</label>
        </div>
    )
}

export default Input