import React from 'react'
import Button from '../elements/Button'
import Input from '../elements/Input'
import "../../assets/Css/FormStyles.css"

function AuthForm() {
    function handleSubmit(e) {
        e.preventDefault();
        e.stopPropagation();
    }
    
    return (
        <form>
            <img className='logo w-50 mx-auto mb-5 mt-3' src={require("../../assets/img/VCH-logo.png")} alt="" />
            <Input id={"empCode"} type={"text"} label={"Enter Employee Code"}/>
            <Input id={"password"} type={"password"} label={"Enter password"}/>
            <div className='d-flex justify-content-center'>
                <Button onClick={handleSubmit} className={"submit-btn"} text="Click Me"/>
            </div>
        </form>
    )
}

export default AuthForm